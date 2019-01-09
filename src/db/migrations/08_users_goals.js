
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users_goals', (table) => {
    table.increments();
    table.integer('users_id').references('users.id').onDelete('cascade')
    table.integer('goals_id').references('goals.id').onDelete('cascade')
    table.timestamps(true, true);
  })
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users_goals');
};