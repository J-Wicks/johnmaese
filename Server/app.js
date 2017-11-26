const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db');
const app = express();
const blogPosts = require('./models.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/files', express.static(path.join(__dirname, '../public')));

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
