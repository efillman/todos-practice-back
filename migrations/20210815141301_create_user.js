/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('user_id');
    table.string('user_email').notNullable();
    table.integer('user_name').notNullable();
    table.timestamps(true, true);
    table.unique('user_email');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user');
};
