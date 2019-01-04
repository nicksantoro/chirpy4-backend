
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          goals_id: 1,
          task: 'Study 6 hours per week',
          alert: "19:00:00"
        },
        {
          id: 2,
          goals_id: 1,
          task: 'alert office hours with instructor',
          alert: "19:00:00"
        },
        {
          id: 3,
          goals_id: 3,
          task: 'Interview Prep',
          alert: "19:00:00"
        },
        {
          id: 4,
          goals_id: 3,
          task: 'Study React and build mini projects',
          alert: "19:00:00"
        },
        {
          id: 5,
          goals_id: 2,
          task: 'Run 15 miles per week',
          alert: "19:00:00"
        },
        {
          id: 6,
          goals_id: 2,
          task: 'Udemy Course',
          alert: "19:00:00"
        },

      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"tasks_id_seq"', (SELECT MAX("id") FROM "tasks"))`
      )
    )
};