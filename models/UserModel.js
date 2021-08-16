const dotenv = require('dotenv');
const knex = require('knex');
const knexConfig = require('../knexfile');

class UserModel {
  constructor() {
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
    const { parsed: envs } = result;
    this.knexWorker = knex(knexConfig[envs.NODE_ENV]);
  }

  // GET / user index  user.index
  async userIndex() {
    return this.knexWorker
      .select('*')
      .from('user');
  }

  // GET / user/create create  user.create
  userCreate() {

  }

  // POST / user store  user.store
  userStore() {

  }

  // GET / user/{ user} show  user.show
  userShow() {

  }

  // GET / user/{ user}/edit edit  user.edit
  userEdit() {

  }

  // PUT/PATCH / user/{ user} update  user.update
  userUpdate() {

  }

  // DELETE / user/{ user} destroy  user.destroy
  userDestroy() {

  }
}

module.exports = new UserModel();
