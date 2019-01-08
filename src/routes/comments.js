const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/comments')

router.get('/', ctrl.getAllComments);

module.exports = router;
