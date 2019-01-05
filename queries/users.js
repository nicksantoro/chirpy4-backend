const knex = require('./db');

const getAllUsers = () => {
  return knex('users').orderBy('created_at', 'desc');
}

module.exports = {
  getAllUsers
}