const model = require('../models/tasks');

const getAllTasks = (req, res, next) => {
  const promise = model.getAllTasks();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const getTaskById = (req, res, next) => {
  const { id } = req.params;
  const promise = model.getTaskById(id);
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const deleteTaskById = (req, res, next) => {
  const { id } = req.params;
  const promise = model.deleteTaskById(id);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

const updateTaskById = (req, res, next) => {
  const payload = req.body;
  const { id } = req.params;
  const promise = model.updateTaskById(id, payload)
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

module.exports = {
  getAllTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById
}