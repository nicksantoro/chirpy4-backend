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

const deleteGoalById = (req, res, next) => {
  const { id } = req.params;
  const promise = model.deleteGoalById(id);
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const updateGoalById = (req, res, next) => {
  const payload = req.body;
  const { id } = req.params;
  const promise = model.updateGoalById(id, payload);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

const likeGoal = (req, res, next) => {
  let goals_id = req.params.id;
  let { value, users_id } = req.body;
  const promise = model.likeGoal({ goals_id, value, users_id });
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })

}


module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  deleteGoalById,
  updateGoalById,
  likeGoal
}