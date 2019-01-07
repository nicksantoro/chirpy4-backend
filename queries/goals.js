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
    .insert({
      users_id: payload.users_id,
      goal: payload.goal,
      description: payload.description,
      start_date: payload.start_date,
      end_date: payload.end_date,
      rank: payload.rank
    })
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