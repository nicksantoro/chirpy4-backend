const model = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const env = require('../../env');

const getAllUsers = (req, res, next) => {
  const promise = model.getAllUsers();
  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));
  promise.catch(error => {
    next(error);
  });
}

const getUserById = (req, res, next) => {
  let { id } = req.params;
  const promise = model.getUserById(id);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

const deleteUserById = (req, res, next) => {
  let { id } = req.params;
  const promise = model.deleteUserById(id);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

const createUser = async (req, res, next) => {
  try {
    let payload = req.body;
    const emailExists = await model.getUserByEmail(payload.email);
    if (!emailExists.error) return res.status(422).json({ error: "email is already taken" });
    const hash = await bcrypt.hash(payload.password, 10)
    payload.password = hash;
    const user = await model.createUser(payload);
    return user.error ? next(user) : res.status(200).json(user)
  }
  catch (error) {
    return next(error)
  }
}


const updateUserById = (req, res, next) => {
  let payload = req.body;
  let { id } = req.params;
  const promise = model.updateUserById(id, payload);
  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error)
    })
}

const loginUser = async (req, res, next) => {
  let payload = req.body;
  if (!payload.password || !payload.email) return res.status(400).json({ error: "username and password required" })
  const user = await model.getUserByEmail(payload.email)
  if (user.error) return res.status(404).json({ error: "username or password invalid" })
  const isValid = await bcrypt.compare(payload.password, user.password);
  if (isValid) {
    const goals = await model.getGoals(user.id)
    user.goals = goals
    delete user.password;
    const timeIssued = Math.floor(Date.now() / 1000)
    const timeExpires = timeIssued + 86400 * 28
    const token = await jwt.sign(
      {
        iss: 'goals',
        aud: 'goals',
        iat: timeIssued,
        exp: timeExpires,
        identity: user.id
      },
      env.JWT_KEY
    )

    res.set({
      authorization: token
    }).status(200).json(user)
  }
  return res.status(404).json({ error: "username or password invalid" })
}

const token = async (req, res, next) => {
  let token = req.get("authorization")
  let userToken = await jwt.verify(token, "secret")
  if (!userToken) return res.status(404).json({ error: "token invalid" })
  if (userToken.exp > Date.now()) return res.status(404).json({ error: "token expired" })
  let user = await model.getUserById(userToken.identity)
  if (!user) return res.status(404).json({ error: "user not found" })
  const goals = await model.getGoals(user.id)
  user.goals = goals
  return res.status(200).json(user)
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  createUser,
  updateUserById,
  loginUser,
  token
}

