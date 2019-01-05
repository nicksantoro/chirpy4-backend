const userQuery = require('../../queries/users');

const getAllUsers = () => {
  const user = userQuery.getAllUsers();
  return user.then(result => result.length < 1 ? { error: 'error retrieving users', status: 500 } : result)
};

const getUserById = (userId) => {
  const user = userQuery.getUserById(userId);
  return user.then(result => !result ? { error: "error retrieving user by id", status: 500 } : result)
}

const deleteUserById = (userId) => {
  const user = userQuery.deleteUserById(userId);
  return user.then(result => !result ? { error: "there is no user to delete", status: 500 } : result)
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById
}

