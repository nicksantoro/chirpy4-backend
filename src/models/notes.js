const noteQuery = require('../../queries/notes');

const getAllNotes = () => {
  const note = noteQuery.getAllNotes();
  return note.then(result => (result.length < 1 ? { error: "no notes exists", status: 500 } : result));
}

module.exports = {
  getAllNotes
}