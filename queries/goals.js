const knex = require('./db');

const getAllGoals = () => {
  return knex('goals').join('users_goals', 'goals.id', '=', 'users_goals.goals_id')
    .join('users', 'users.id', '=', 'goals.users_id')
    .orderBy('goals.created_at', 'desc')
    .select('users.username', 'users.image', 'goals.goal', 'goals.id', 'goals.description', 'goals.users_id', 'goals.start_date', 'goals.end_date', 'goals.created_at',
      'goals.updated_at', 'goals.rank', 'goals.completed')
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

const updateGoalById = async (goalId, payload) => {
  let user = await knex('goals')
    .where("id", goalId)
    .update(payload, '*')
  return await knex('goals')
    .where("users_id", user[0].users_id).orderBy('created_at', 'desc')
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