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
      email: payload.email
    })
    .returning('*')
}

const getUserByEmail = (email) => {
  return knex('users')
    .where('email', email).orWhere('username', email).first()
    .then(result => {
      return result
    })
}

const updateUserById = (id, payload) => {
  return knex('users')
    .where('id', id)
    .update(payload, '*')
}

const getGoals = (id) => {
  return knex('goals')
    .where('users_id', id).join('users_goals', 'goals.id', '=', 'users_goals.goals_id')
    .orderBy('created_at', 'desc')

}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  createUser,
  updateUserById,
  getUserByEmail,
  getGoals
}