/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('todo', (table) => {
    table.increments('todo_id').primary();
    table.integer('user_id').notNullable();
    table.string('todo_description').notNullable();
    table.boolean('todo_is_completed').defaultTo(false).notNullable();
    table.timestamps(true, true);
    table.foreign('user_id').references('user.user_id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('todo');
};
