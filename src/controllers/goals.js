const model = require('../models/goals');

const getAllGoals = (req, res, next) => {
  const promise = model.getAllGoals();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const getGoalById = (req, res, next) => {
  const { id } = req.params;
  const promise = model.getGoalById(id)
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const createGoal = (req, res, next) => {
  const payload = req.body;
  const promise = model.createGoal(payload)
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}


module.exports = {
  getAllGoals,
  getGoalById,
  createGoal
}