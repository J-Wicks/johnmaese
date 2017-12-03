const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');

const db = require('./db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const dbStore = new SequelizeStore({ db });

const app = express();
const blogPosts = require('./models/blogPosts.js');
const Users = require('./models/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbStore.sync();

app.use(session({
  secret: process.env.SESSION_SECRET || 'an insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  Users.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(done);
});

app.use('/files', express.static(path.join(__dirname, '../public')));

app.use('/login', require('./login'));

app.post('/api/blog', (req, res) => {
  blogPosts.create({
    author: 'John Maese',
    title: req.body.title,
    content: req.body.content,
  })
    .then((createdPost) => {
      res.send(createdPost);
    });
});

app.get('/api/blog/:blogId', (req, res) => {
  blogPosts.findById(req.params.blogId)
    .then((foundPost) => {
      res.send(foundPost);
    })
});

app.get('/api/blog', (req, res) => {
  blogPosts.findAll()
    .then((posts) => {
      res.send(posts);
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

db.sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("listening on port 3000");
    });
  });
