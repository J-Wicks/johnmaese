const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const app = express();
const blogPosts = require('./models.js')

db.sync()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port 3000");
  });
});
