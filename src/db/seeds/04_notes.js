exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          tasks_id: 1,
          note: "Read crack the coding interview"
        },
        {
          id: 2,
          tasks_id: 1,
          note: 'class starts jan'
        },
        {
          id: 3,
          tasks_id: 3,
          note: 'Take notes!'
        },
        {
          id: 4,
          tasks_id: 3,
          note: 'Focus on redux'
        },
        {
          id: 5,
          tasks_id: 2,
          note: 'Run golden gate park loop'
        },
        {
          id: 6,
          tasks_id: 2,
          note: 'Take advance course next'
        },

      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"notes_id_seq"', (SELECT MAX("id") FROM "notes"))`
      )
    )
};