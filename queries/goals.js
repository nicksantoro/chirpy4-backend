const knex = require('./db');

const getAllGoals = () => {
  return knex('goals')
    .orderBy('created_at', 'desc');
}

// const getGoalById = (goalId) => {
//   return knex('goals')
//     .where('id', goalId).first()
//     .then(result => {
//       return result;
//     })
// }

module.exports = {
  getAllGoals,
  // getGoalById
}