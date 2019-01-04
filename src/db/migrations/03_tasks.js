
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.integer("goals_id").references('goals.id').onDelete('cascade').notNullable();
    table.text('task')
    table.time('alert')
    table.timestamps(true, true);
  })
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tasks');
};