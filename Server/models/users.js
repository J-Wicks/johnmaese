const db = require('../db');
const Sequelize = require('sequelize');
const _ = require('lodash');
const crypto = require('crypto');

const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    user.salt = user.constructor.generateSalt();
    user.password = user.constructor.encryptPassword(user.password, user.salt);
  }
};

const User = db.define('User', {
  name: {
    type: Sequelize.TEXT,
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING,
  },
  passwordReset: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
}, {
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword,
  },
});

User.prototype.sanitize = function () {
  return _.omit(this.toJSON(), ['password', 'salt']);
};

User.prototype.correctPassword = function (candidatePassword) {
  return this.constructor.encryptPassword(candidatePassword, this.salt) === this.password;
};

User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function (plainText, salt) {
  console.log('**plaintext', plainText, '**salt**', salt);
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
};


module.exports = User;
