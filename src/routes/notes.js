const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/notes');

//get all notes
router.get('/', ctrl.getAllNotes);


module.exports = router;