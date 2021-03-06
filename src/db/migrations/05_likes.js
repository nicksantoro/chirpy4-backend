exports.up = function (knex, Promise) {
  return knex.schema.createTable('likes', (table) => {
    table.increments();
    table.integer("users_id").references('users.id').onDelete('cascade').notNullable();
    table.integer("goals_id").references('goals.id').onDelete('cascade').notNullable();
    table.integer('value').defaultTo(0);
    table.timestamps(true, true);
  })
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('likes');
};