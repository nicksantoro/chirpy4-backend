const model = require('../models/notes');

const getAllNotes = (req, res, next) => {
  const promise = model.getAllNotes();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

module.exports = {
  getAllNotes
}