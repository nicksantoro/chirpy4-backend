const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/goals');

// get all goals
router.get('/', ctrl.getAllGoals);

// get goal by id

router.get('/:id', ctrl.getGoalById)

// create goal


// delete goal


// update goal



module.exports = router;