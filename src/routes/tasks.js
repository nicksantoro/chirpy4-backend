const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/tasks')

// get all tasks
router.get('/', ctrl.getAllTasks);

module.exports = router;