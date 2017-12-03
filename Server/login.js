const router = require('express').Router();
const User = require('./models/users');

router.post('/', (req, res, next)=> {
  res.send('hit login route');
  User.findById(1)
    .then((user) => {
      if (!user) { res.status(401).send('User Not Found') }
      else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
      }
      else {
        req.login(user, (err) => {
          if (err) console.error(err);
          else res.json(user);
        });
      }
    });
});

router.post('/create', (req, res, next) => {
  User.create(req.body)
    .then(createdUser => res.send(createdUser));
});

router.get('/me', (req, res, next) => {
  res.send(req.user);
});

module.exports = router;
