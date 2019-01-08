exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.integer("users_id").references('users.id').onDelete('cascade').notNullable();
    table.integer("goals_id").references('goals.id').onDelete('cascade').notNullable();
    table.text('comment')
    table.timestamps(true, true);
  })
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comments');
};
