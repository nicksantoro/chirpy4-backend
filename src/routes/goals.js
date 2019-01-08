const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/goals');

// get all goals
router.get('/', ctrl.getAllGoals);

// get goal by id
router.get('/:id', ctrl.getGoalById)

// create goal
router.post('/', ctrl.createGoal)

// delete goal
router.delete('/:id', ctrl.deleteGoalById)

// update goal
router.put('/:id', ctrl.updateGoalById)

// get comments from goal
// router.get('/:id/comments', ctrl.getCommentsFromGoal)

// create a like
router.put('/:id/like', ctrl.likeGoal)


module.exports = router;