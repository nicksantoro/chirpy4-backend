const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/tasks')

// get all tasks
router.get('/', ctrl.getAllTasks);

// get task by id
router.get('/:id', ctrl.getTaskById);

// delete task by id
router.delete('/:id', ctrl.deleteTaskById)

module.exports = router;