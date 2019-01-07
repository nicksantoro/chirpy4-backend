const knex = require('./db');

const getAllGoals = () => {
  return knex('goals').orderBy('created_at', 'desc');
}

module.exports = {
  getAllGoals

}