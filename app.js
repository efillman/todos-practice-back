const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptions();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptions() {
    this.server.use(async (err, req, res, next) => res.status(500).send(err));
  }
}

module.exports = new App().server;
