const model = require('../models/users');

const getAllUsers = (req, res, next) => {
  const promise = model.getAllUsers();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

module.exports = {
  getAllUsers
}