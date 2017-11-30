const router = require('express').Router();
const User = require('./models/users');

router.post('/login', (req, res, next)=> {
  User.findOne({
    where: { email: req.body.email },
  })
    .then( user => {
      if(!user) { res.status(401).send('User Not Found')}
      else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
      }

      else console.log('user found');
    })
})