const model = require('../models/goals');

const getAllGoals = (req, res, next) => {
  const promise = model.getAllGoals();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}





module.exports = {
  getAllGoals
}