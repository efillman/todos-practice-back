/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todo').del()
  // Inserts seed entries
    .then(() => knex('todo').insert([
      { todo_id: 1, user_id: 1, todo_description: '01 First TODO' },
      { todo_id: 2, user_id: 1, todo_description: '01 Second TODO' },
      { todo_id: 3, user_id: 2, todo_description: '02 First TODO' },
      { todo_id: 4, user_id: 2, todo_description: '02 Second TODO' },
      { todo_id: 5, user_id: 3, todo_description: '03 First TODO' },
      { todo_id: 6, user_id: 3, todo_description: '03 Second TODO' },
    ]));
};

// table.increments('todo_id').primary();
// table.integer('user_id').notNullable();
// table.string('todo_description').notNullable();
// table.boolean('todo_is_completed').defaultTo(false).notNullable();
// table.timestamps(true, true);
// table.foreign('user_id').references('user.user_id');
