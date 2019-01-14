
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('name').notNullable()
    table.text('username').notNullable()
    table.text('password').notNullable()
    table.text('email').notNullable()
    table.text("image")
    table.timestamps(true, true);
  })
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};