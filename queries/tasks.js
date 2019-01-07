const knex = require('./db');

const getAllTasks = () => {
  return knex('tasks').orderBy('created_at', 'desc')
}

module.exports = {
  getAllTasks
}