const knex = require('./db');

const getAllUsers = () => {
  return knex('users').orderBy('created_at', 'desc');
}

const getUserById = (userId) => {
  return knex('users')
    .where('id', userId).first()
    .then(result => {
      return result;
    })
}

const deleteUserById = (userId) => {
  return knex('users')
    .where('id', userId)
    .del()
    .then(result => {
      return result
    })
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById
}