exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Dave',
          username: 'daveycrocket',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'dave@galvanize.com',
          image: "https://66.media.tumblr.com/cefe1414e60b6e8ad00b70d92affae6c/tumblr_plbdyvC3iQ1r367cco3_1280.jpg"
        },
        {
          name: 'Elizabeth',
          username: 'biz',
          password: 'password123',
          email: 'elizabeth@email.com',
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg"
        },
        {
          name: 'John',
          username: 'iamthecoolest',
          password: 'password123',
          email: 'john@email.com',
          image: "https://66.media.tumblr.com/8f1e0162abf95dac56cf45afa1aafe49/tumblr_plbdyvC3iQ1r367cco6_1280.jpg"
        },
        {
          name: 'Mary',
          username: 'maryme',
          password: 'password123',
          email: 'mary@email.com',
          image: "https://66.media.tumblr.com/3326cf043780a9167788db2c576dce61/tumblr_plbdyvC3iQ1r367cco2_1280.jpg"
        },
        {
          name: 'Isabella',
          username: 'ilovesf',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'isabella@email.com',
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg"
        },
        {
          name: 'Mark',
          username: 'mdmark',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'mark@galvanize.com',
          image: "https://66.media.tumblr.com/cefe1414e60b6e8ad00b70d92affae6c/tumblr_plbdyvC3iQ1r367cco3_1280.jpg"
        },
        {
          name: 'Alexis',
          username: 'lexi',
          password: 'password123',
          email: 'alexis@email.com',
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg"
        },
        {
          name: 'Lisa',
          username: 'lisafox',
          password: 'password123',
          email: 'fox@email.com',
          image: "https://66.media.tumblr.com/8f1e0162abf95dac56cf45afa1aafe49/tumblr_plbdyvC3iQ1r367cco6_1280.jpg"
        },
        {
          name: 'Linda',
          username: 'tiger',
          password: 'password123',
          email: 'linda@email.com',
          image: "https://66.media.tumblr.com/3326cf043780a9167788db2c576dce61/tumblr_plbdyvC3iQ1r367cco2_1280.jpg"
        },
        {
          name: 'Melissa',
          username: 'lovestopaint',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'melissa@email.com',
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg"
        },
        {
          name: 'Nick',
          username: 'nick3000',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'santoro.nick@gmail.com',
          image: "https://66.media.tumblr.com/cefe1414e60b6e8ad00b70d92affae6c/tumblr_plbdyvC3iQ1r367cco3_1280.jpg"
        },
        {
          name: 'Paula',
          username: 'happyperson',
          password: 'password123',
          email: 'paula@email.com',
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg"
        },
        {
          name: 'Steve',
          username: 'workinghard',
          password: 'password123',
          email: 'steve@email.com',
          image: "https://66.media.tumblr.com/8f1e0162abf95dac56cf45afa1aafe49/tumblr_plbdyvC3iQ1r367cco6_1280.jpg"
        }
      ]);
    });
};