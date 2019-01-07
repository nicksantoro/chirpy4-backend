const knex = require('./db');

const getAllTasks = () => {
  return knex('tasks').orderBy('created_at', 'desc')
}

const getTaskById = (taskId) => {
  return knex('tasks')
    .where('id', taskId).first()
    .then(result => {
      return result;
    })
}

const deleteTaskById = (taskId) => {
  return knex('tasks')
    .where("id", taskId)
    .del()
    .returning('*')
}

const updateTaskById = (taskId, payload) => {
  return knex('tasks')
    .where("id", taskId)
    .update(payload, '*')
}

const createTask = (payload) => {
  return knex('tasks')
    .insert(payload)
    .returning('*')
}

module.exports = {
  getAllTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  createTask
}