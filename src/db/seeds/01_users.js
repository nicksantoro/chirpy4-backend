exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Dave',
          username: 'dave',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'dave@galvanize.com'
        },
        {
          name: 'Elizabeth',
          username: 'elizabeth',
          password: 'password123',
          email: 'elizabeth@email.com'
        },
        {
          name: 'John',
          username: 'john',
          password: 'password123',
          email: 'john@email.com'
        },
        {
          name: 'Mary',
          username: 'mary',
          password: 'password123',
          email: 'mary@email.com'
        },
        {
          name: 'Isabella',
          username: 'isabella',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'isabella@email.com'
        }
      ]);
    });
};