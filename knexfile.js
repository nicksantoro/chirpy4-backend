'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      // DATABASE_NAME
      database: 'goals'
    },
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  }
}
