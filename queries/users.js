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

const createUser = (payload) => {
  return knex('users')
    .insert({
      name: payload.name,
      username: payload.username,
      password: payload.password,
      email: payload.password
    })
    .returning('*')
}

const updateUserById = (id, payload) => {
  return knex('users')
    .where('id', id)
    .update(payload, '*')
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  createUser,
  updateUserById
}