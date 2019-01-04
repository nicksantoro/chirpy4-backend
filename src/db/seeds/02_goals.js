
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {
          id: 1,
          users_id: 1,
          goal: 'C++ Programming Certificate',
          description: '2 Year City College Program',
          start_date: '2019-12-29 19:00:00',
          end_date: '2019-12-29 19:00:00',
          rank: 8
        },
        {
          id: 2,
          users_id: 1,
          goal: 'Lose 20lbs',
          description: 'Get in shape!',
          start_date: '2019-12-29 19:00:00',
          end_date: '2019-02-21 22:00:00',
          rank: 8
        },
        {
          id: 3,
          users_id: 3,
          goal: 'New Career',
          description: 'Get a Software Developer Job, Relocation is Okay!',
          start_date: '2019-12-29 19:00:00',
          end_date: '2019-01-10 21:00:00',
          rank: 10
        },
        {
          id: 4,
          users_id: 2,
          goal: 'Pay off Credit Card',
          description: 'Chip away monthly',
          start_date: '2019-12-29 19:00:00',
          end_date: '2019-12-10 19:00:00',
          rank: 8
        },
        {
          id: 5,
          users_id: 2,
          goal: 'Run a Half Marathon',
          description: 'Train for a half marathon',
          start_date: '2019-12-29 19:00:00',
          end_date: '2019-3-10 19:00:00',
          rank: 5
        },
        {
          id: 6,
          users_id: 2,
          goal: 'Learn Ruby',
          description: 'Learn Ruby programming language and build 1 solid project',
          start_date: '2019-12-29 19:00:00',
          end_date: '2019-4-05 20:00:00',
          rank: 7
        },

      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"goals_id_seq"', (SELECT MAX("id") FROM "goals"))`
      )
    )
};