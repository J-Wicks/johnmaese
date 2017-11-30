const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('Blog_post', {
  author: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
});
