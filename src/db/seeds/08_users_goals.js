
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_goals').insert([
        {
          id: 1,
          users_id: 1,
          goals_id: 1
        },
        {
          id: 2,
          users_id: 1,
          goals_id: 2
        },
        {
          id: 3,
          users_id: 2,
          goals_id: 2
        },
        {
          id: 4,
          users_id: 3,
          goals_id: 3
        },
        {
          id: 5,
          users_id: 4,
          goals_id: 2
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"users_goals_id_seq"', (SELECT MAX("id") FROM "users_goals"))`
      )
    )
};