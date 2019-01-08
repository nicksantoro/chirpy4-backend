
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {
          id: 1,
          users_id: 1,
          goals_id: 2,
          value: 6
        },
        {
          id: 2,
          users_id: 1,
          goals_id: 1,
          value: 1
        },
        {
          id: 3,
          users_id: 2,
          goals_id: 3,
          value: 2
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"likes_id_seq"', (SELECT MAX("id") FROM "likes"))`
      )
    )
};