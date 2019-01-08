const userQuery = require('../../queries/users');

const getAllUsers = () => {
  const user = userQuery.getAllUsers();
  return user.then(result => result.length < 1 ? { error: "error, there are no users", status: 500 } : result)
};

const getUserById = (userId) => {
  const user = userQuery.getUserById(userId);
  return user.then(result => !result ? { error: "error retrieving user by id", status: 500 } : result)
}

const deleteUserById = (userId) => {
  const user = userQuery.deleteUserById(userId);
  return user.then(result => !result ? { error: "error retrieving user by id", status: 500 } : result)
}

const createUser = (payload) => {
  const user = userQuery.createUser(payload);
  return user.then(result => {
    if (!result) {
      return { error: "error creating user", status: 500 }
    } else {
      const { password, created_at, updated_at, ...data } = result[0]
      return data;
    }
  })
}

const updateUserById = (id, payload) => {
  const user = userQuery.updateUserById(id, payload);
  return user.then(result => !result ? { error: "error updating user", status: 500 } : result)
}

const getUserByEmail = (email) => {
  const user = userQuery.getUserByEmail(email);
  return user.then(result => !result ? { error: "error, user does not exist", status: 422 } : result)
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  createUser,
  updateUserById,
  getUserByEmail
}

