const taskQuery = require('../../queries/tasks');

const getAllTasks = () => {
  const tasks = taskQuery.getAllTasks();
  return tasks.then(result => result.length < 1 ? { error: 'error: there are no tasks', status: 500 } : result)

}

module.exports = {
  getAllTasks
}