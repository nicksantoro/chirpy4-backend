
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
          start_date: '2019-01-29 19:00:00',
          end_date: '2019-12-29 19:00:00',
          rank: 8,
          completed: true
        },
        {
          id: 2,
          users_id: 1,
          goal: 'Lose 20lbs',
          description: 'Get in shape!',
          start_date: '2019-02-01 19:00:00',
          end_date: '2019-06-21 22:00:00',
          rank: 8,
          completed: false
        },
        {
          id: 3,
          users_id: 3,
          goal: 'New Career',
          description: 'Interview Prep',
          start_date: '2019-12-29 19:00:00',
          end_date: '2019-01-10 21:00:00',
          rank: 10,
          completed: false
        },
        {
          id: 4,
          users_id: 2,
          goal: 'Pay off Credit Card',
          description: 'Chip away monthly',
          start_date: '2019-01-06 19:00:00',
          end_date: '2019-06-10 19:00:00',
          rank: 8,
          completed: false
        },
        {
          id: 5,
          users_id: 12,
          goal: 'Run a Half Marathon',
          description: 'Train for a half marathon',
          start_date: '2019-01-29 19:00:00',
          end_date: '2019-03-10 19:00:00',
          rank: 5,
          completed: false
        },
        {
          id: 6,
          users_id: 10,
          goal: '10 day backpacking trip',
          description: 'Hike the west coast trail',
          start_date: '2018-05-10 19:00:00',
          end_date: '2018-05-20 20:00:00',
          rank: 7,
          completed: true
        },
        {
          id: 7,
          users_id: 8,
          goal: 'Learn Vue',
          description: 'Learn new framework',
          start_date: '2019-01-29 19:00:00',
          end_date: '2019-04-05 20:00:00',
          rank: 10,
          completed: false
        },
        {
          id: 8,
          users_id: 10,
          goal: 'Learn Ruby',
          description: 'Learn Ruby programming language and build 1 solid project',
          start_date: '2019-01-29 19:00:00',
          end_date: '2019-04-05 20:00:00',
          rank: 7,
          completed: true
        },
        {
          id: 9,
          users_id: 11,
          goal: 'No sugar for a month',
          description: 'No more sweets for 30 days, we can do it',
          start_date: '2019-01-29 19:00:00',
          end_date: '2019-04-05 20:00:00',
          rank: 7,
          completed: true
        },

      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"goals_id_seq"', (SELECT MAX("id") FROM "goals"))`
      )
    )
};