const knex = require('./db');

const getAllGoals = () => {
  return knex('goals')
    .orderBy('created_at', 'desc');
}

const getGoalById = (goalId) => {
  return knex('goals')
    .where('id', goalId).first()
    .then(result => {
      return result;
    })
}

const createGoal = (payload) => {
  return knex('goals')
    .insert(payload)
    .returning('*')
}

const deleteGoalById = (goalId) => {
  return knex('goals')
    .where("id", goalId)
    .del()
    .returning('*')
}

const updateGoalById = (goalId, payload) => {
  return knex('goals')
    .where("id", goalId)
    .update(payload, '*')
}

const likeGoal = (payload) => {
  return knex('likes')
    .insert(payload)
    .returning('*')
}

const joinGoal = (payload) => {
  return knex('users_goals')
    .insert(payload)
    .returning('*')
}

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  deleteGoalById,
  updateGoalById,
  likeGoal,
  joinGoal
}