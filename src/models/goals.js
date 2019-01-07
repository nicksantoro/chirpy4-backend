const goalQuery = require('../../queries/goals');

const getAllGoals = () => {
  const goal = goalQuery.getAllGoals();
  return goal.then(result => result.length < 1 ? { error: "error retrieving goals", status: 500 } : result)
}

module.exports = {
  getAllGoals
}