const db = require('./db');
const Sequelize = require('sequelize');

module.exports = db.define('Blog_post', {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
});
