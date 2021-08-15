/* eslint-disable import/extensions */
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

app.get('/users', (req, res) => {
  knex
    .select('*')
    .from('user')
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: 'Error',
      });
    });
});

app.get('/todos', (req, res) => {
  knex
    .select('*')
    .from('todo')
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: 'Error',
      });
    });
});

module.exports = app;
