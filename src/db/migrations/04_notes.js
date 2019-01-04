
exports.up = function (knex, Promise) {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table.integer("tasks_id").references('tasks.id').onDelete('cascade').notNullable();
    table.text('note')
    table.timestamps(true, true);
  })
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('notes');
};