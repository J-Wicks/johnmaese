const router = require('express').Router();
const User = require('./models/users');

router.post('/', (req, res, next)=> {
  res.send('hit login route');
  User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      if (!user) { res.status(401).send('User Not Found') }
      else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
      }
      else {
        req.login(user, (err) => {
          if (err) next(err);
          else res.json(user);
        });
      }
    });
});

router.post('/create', (req, res, next) => {
  console.log(req.body);
  User.create(req.body)
    .then(createdUser => res.send(createdUser));
});

router.get('/me', (req, res, next) => {
  res.send(req.user);
})
module.exports = router