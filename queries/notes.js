const knex = require('./db');

const getAllNotes = () => {
  return knex('notes')
    .orderBy('created_at', 'desc');


}

module.exports = {
  getAllNotes
}

