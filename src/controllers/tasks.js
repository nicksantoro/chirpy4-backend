const model = require('../models/tasks');

const getAllTasks = (req, res, next) => {
  const promise = model.getAllTasks();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

module.exports = {
  getAllTasks
}