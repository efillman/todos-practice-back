// setup read from .env
const dotenv = require('dotenv');
const express = require('express');

const app = express();

const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
const knex = require('knex')(require('./knexfile.js')[envs.NODE_ENV]);

app.use(express.json());

app.get('/', function (req, res) {
  res.status(200).json({
    message: "Server Is Up",
  });
});

module.exports = app;
