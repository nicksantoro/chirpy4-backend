exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'David',
          username: 'sunnydave',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'dave@galvanize.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: 'https://66.media.tumblr.com/95817645b3415ac5cc1387b4e76a93e1/tumblr_plbdyvC3iQ1r367cco4_1280.jpg',
        },
        {
          name: 'Elizabeth',
          username: 'biz',
          password: 'password123',
          email: 'elizabeth@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg",

        },
        {
          name: 'John',
          username: 'iamthecoolest',
          password: 'password123',
          email: 'john@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/8f1e0162abf95dac56cf45afa1aafe49/tumblr_plbdyvC3iQ1r367cco6_1280.jpg",

        },
        {
          name: 'Mary',
          username: 'maryme',
          password: 'password123',
          email: 'mary@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/3326cf043780a9167788db2c576dce61/tumblr_plbdyvC3iQ1r367cco2_1280.jpg",

        },
        {
          name: 'Isabella',
          username: 'ilovesf',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'isabella@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg",

        },
        {
          name: 'Mark',
          username: 'mdmark',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'mark@galvanize.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/cefe1414e60b6e8ad00b70d92affae6c/tumblr_plbdyvC3iQ1r367cco3_1280.jpg",

        },
        {
          name: 'Alexis',
          username: 'lexilu',
          password: 'password123',
          email: 'alexis@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg",

        },
        {
          name: 'Lisa',
          username: 'lisapanda',
          password: 'password123',
          email: 'fox@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/8f1e0162abf95dac56cf45afa1aafe49/tumblr_plbdyvC3iQ1r367cco6_1280.jpg",

        },
        {
          name: 'Linda',
          username: 'jellybean',
          password: 'password123',
          email: 'linda@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/3326cf043780a9167788db2c576dce61/tumblr_plbdyvC3iQ1r367cco2_1280.jpg",

        },
        {
          name: 'Melissa',
          username: 'lovetopaint',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'melissa@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/a61bb36f6e9b9829c84bd688f1545199/tumblr_plbdyvC3iQ1r367cco7_1280.jpg",

        },
        {
          name: 'Nick',
          username: 'nick3000',
          password: '$2a$10$3xKOYnwmO7z6IxSSpLKtyOoNgeJKOHvw04sUxBhqO.ar2Kjv8mH26',
          email: 'santoro.nick@gmail.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/cefe1414e60b6e8ad00b70d92affae6c/tumblr_plbdyvC3iQ1r367cco3_1280.jpg",

        },
        {
          name: 'Paula',
          username: 'happyperson',
          password: 'password123',
          email: 'paula@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/3326cf043780a9167788db2c576dce61/tumblr_plbdyvC3iQ1r367cco2_1280.jpg",

        },
        {
          name: 'Steve',
          username: 'workinhard',
          password: 'password123',
          email: 'steve@email.com',
          bio: "Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general. ",
          image: "https://66.media.tumblr.com/8f1e0162abf95dac56cf45afa1aafe49/tumblr_plbdyvC3iQ1r367cco6_1280.jpg",
        }
      ]);
    });
};