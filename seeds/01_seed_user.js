/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
  // Inserts seed entries
    .then(() => knex('user').insert([
      { user_id: 1, user_email: 'efillman@gmail.com', user_name: 'Evan Fillman' },
      { user_id: 2, user_email: 'test1@gmail.com', user_name: 'Test1' },
      { user_id: 3, user_email: 'test2@gmail.com', user_name: 'Test2' },
    ]));
};
