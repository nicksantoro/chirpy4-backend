const goalQuery = require('../../queries/goals');

const getAllGoals = () => {
  const goal = goalQuery.getAllGoals();
  return goal.then(result => (result.length < 1 ? { error: "no goal exists", status: 500 } : result));
}

const getGoalById = (goalId) => {
  const goal = goalQuery.getGoalById(goalId);
  return goal.then(result => (!result ? { error: "error, goal not found", status: 500 } : result));
}

const createGoal = (payload) => {
  const goal = goalQuery.createGoal(payload);
  return goal.then(result => (!result ? { error: "error creating goal", status: 500 } : result));

}

const deleteGoalById = (goalId) => {
  const goal = goalQuery.deleteGoalById(goalId);
  return goal.then(result => (!result ? { error: "goal not found", status: 500 } : result));
}

const updateGoalById = (goalId, payload) => {
  const goal = goalQuery.updateGoalById(goalId, payload);
  return goal.then(result => (!result ? { error: "error updating goal", status: 500 } : result));
}

const likeGoal = (payload) => {
  const like = goalQuery.likeGoal(payload);
  return like.then(result => (!result ? { error: "error liking goal", status: 500 } : result));
}

module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  deleteGoalById,
  updateGoalById,
  likeGoal
}