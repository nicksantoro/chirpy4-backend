const model = require('../models/comments')

const getAllComments = (req, res, next) => {
  const promise = model.getAllComments();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const getCommentById = (req, res, next) => {
  const { id } = req.params;
  const promise = model.getCommentById(id);
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const deleteCommentById = (req, res, next) => {
  const { id } = req.params;
  const promise = model.deleteCommentById(id);
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const updateCommentById = (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  const promise = model.updateCommentById(id, payload);
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const createComment = (req, res, next) => {
  const payload = req.body;
  const promise = model.createComment(payload);
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });

}

module.exports = {
  getAllComments,
  getCommentById,
  deleteCommentById,
  updateCommentById,
  createComment
}