const dotenv = require('dotenv');
const knex = require('knex');
const knexConfig = require('../knexfile');

class TodoModel {
  constructor() {
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
    const { parsed: envs } = result;
    this.knexWorker = knex(knexConfig[envs.NODE_ENV]);
  }

  // GET /todo index todo.index
  async todoIndex() {
    return this.knexWorker
      .select('*')
      .from('todo');
  }

  // GET /todo/create create todo.create
  todoCreate() {

  }

  // POST /todo store todo.store
  todoStore() {

  }

  // GET /todo/{todo} show todo.show
  todoShow() {

  }

  // GET /todo/{todo}/edit edit todo.edit
  todoEdit() {

  }

  // PUT/PATCH /todo/{todo} update todo.update
  todoUpdate() {

  }

  // DELETE /todo/{todo} destroy todo.destroy
  todoDestroy() {

  }
}

module.exports = new TodoModel();
