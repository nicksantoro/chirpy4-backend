const commentQuery = require('../../queries/comments');

const getAllComments = () => {
  const comment = commentQuery.getAllComments();
  return comment.then(result => (result.length < 1 ? { error: "no comments exist", status: 500 } : result));
}

const getCommentById = (commentId) => {
  const comment = commentQuery.getCommentById(commentId);
  return comment.then(result => (!result ? { error: "no comment exists", status: 500 } : result));
}

const deleteCommentById = (commentId) => {
  const comment = commentQuery.deleteCommentById(commentId);
  return comment.then(result => (!result ? { error: "no comment exists", status: 500 } : result));
}

const updateCommentById = (commentId, payload) => {
  const comment = commentQuery.updateCommentById(commentId, payload);
  return comment.then(result => (!result ? { error: "no comment exists", status: 500 } : result));
}

module.exports = {
  getAllComments,
  getCommentById,
  deleteCommentById,
  updateCommentById
}