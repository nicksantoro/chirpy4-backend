const model = require('../models/comments')

const getAllComments = (req, res, next) => {
  const promise = model.getAllComments();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}


module.exports = {
  getAllComments
}