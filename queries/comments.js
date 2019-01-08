const knex = require('./db');

const getAllComments = () => {
  return knex('comments')
    .orderBy('created_at', 'desc');
}

const getCommentById = (commentId) => {
  return knex('comments')
    .where("id", commentId).first()
    .then(result => {
      return result;
    })
}

const deleteCommentById = (commentId) => {
  return knex('comments')
    .where("id", commentId)
    .del()
    .returning('*')
}

const updateCommentById = (commentId, payload) => {
  return knex('comments')
    .where("id", commentId)
    .update(payload, '*')
}

const createComment = (payload) => {
  return knex('comments')
    .insert(payload)
    .returning('*')
}

module.exports = {
  getAllComments,
  getCommentById,
  deleteCommentById,
  updateCommentById,
  createComment,
  createComment
}