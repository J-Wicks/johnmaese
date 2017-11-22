const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DATABASEURL || 'postgres://localhost:5432/john-maese', {
  logging: false,
});
