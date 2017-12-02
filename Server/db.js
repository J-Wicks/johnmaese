const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/john-maese', {
  logging: false,
});
