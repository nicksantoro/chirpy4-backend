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

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  deleteGoalById
}