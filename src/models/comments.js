const commentQuery = require('../../queries/comments');

const getAllComments = () => {
  const comment = commentQuery.getAllComments();
  return comment.then(result => (result.length < 1 ? { error: "no comments exist", status: 500 } : result));
}

const getCommentById = (commentId) => {
  const comment = commentQuery.getCommentById(commentId);
  return comment.then(result => (!result ? { error: "no comment exists", status: 500 } : result));
}

module.exports = {
  getAllComments,
  getCommentById
}