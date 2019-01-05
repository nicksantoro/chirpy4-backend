const model = require('../models/users');

const getAllUsers = (req, res, next) => {
  const promise = model.getAllUsers();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const getUserById = (req, res, next) => {
  console.log(req.params)
  let { id } = req.params;
  const promise = model.getUserById(id);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

const deleteUserById = (req, res, next) => {
  let { id } = req.params;
  const promise = model.deleteUserById(id);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

const createUser = (req, res, next) => {
  let payload = req.body;
  const promise = model.createUser(payload);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  createUser
}

