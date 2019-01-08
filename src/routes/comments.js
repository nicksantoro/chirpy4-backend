const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/comments')

router.get('/', ctrl.getAllComments);

router.get('/:id', ctrl.getCommentById);

router.delete('/:id', ctrl.deleteCommentById);

router.put('/:id', ctrl.updateCommentById)

module.exports = router;
