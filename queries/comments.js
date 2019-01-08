const knex = require('./db');

const getAllComments = () => {
  return knex('comments')
    .orderBy('created_at', 'desc');
}

module.exports = {
  getAllComments
}