
exports.up = function (knex, Promise) {
  return knex.schema.createTable('goals', (table) => {
    table.increments();
    table.integer("users_id").references('users.id').onDelete('cascade').notNullable();
    table.text('goal').notNullable();
    table.text('description').notNullable();
    table.dateTime('start_date').notNullable().defaultTo(knex.fn.now())
    table.dateTime('end_date').notNullable();
    table.integer('rank').notNullable();
    table.timestamps(true, true);
  })
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('goals');
};