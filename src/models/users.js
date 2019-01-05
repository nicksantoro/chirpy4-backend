const userQuery = require('../../queries/users');

const getAllUsers = () => {
  const user = userQuery.getAllUsers();
  return user.then(result => (result.length < 1 ? { error: 'error retrieving users', status: 500 } : result))
};

module.exports = {
  getAllUsers
}

