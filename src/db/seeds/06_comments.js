
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          users_id: 1,
          goals_id: 1,
          comment: "You got this!"
        },
        {
          id: 2,
          users_id: 3,
          goals_id: 2,
          comment: "Way to go"
        },
        {
          id: 3,
          users_id: 2,
          goals_id: 2,
          comment: "I'll join you on this goal!"
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"comments_id_seq"', (SELECT MAX("id") FROM "comments"))`
      )
    )
};