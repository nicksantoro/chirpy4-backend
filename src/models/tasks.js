const taskQuery = require('../../queries/tasks');

const getAllTasks = () => {
  const tasks = taskQuery.getAllTasks();
  return tasks.then(result => result.length < 1 ? { error: 'error: there are no tasks', status: 500 } : result)

}

const getTaskById = (taskId) => {
  const task = taskQuery.getTaskById(taskId);
  return task.then(result => !result ? { error: 'error: this task does not exist', status: 500 } : result)
}

const deleteTaskById = (taskId) => {
  const task = taskQuery.deleteTaskById(taskId);
  return task.then(result => !result ? { error: 'error deleting task', status: 500 } : result)
}

const updateTaskById = (taskId, payload) => {
  const task = taskQuery.updateTaskById(taskId, payload);
  return task.then(result => !result ? { error: 'error updating task', status: 500 } : result)
}

module.exports = {
  getAllTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById
}