const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/users');

router.get('/', ctrl.getAllUsers);

router.get('/:id', ctrl.getUserById);

router.delete('/:id', ctrl.deleteUserById);

router.post('/', ctrl.createUser);

router.post('/login', ctrl.loginUser);

router.put('/:id', ctrl.updateUserById);

module.exports = router;