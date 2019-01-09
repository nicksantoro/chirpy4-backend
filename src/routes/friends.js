const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/friends')

// ===============================================
// GET ROUTES FOR USER PROFILE
//  CREATE & DELETE FRIEND
// ===============================================

router.post('/', ctrl.createFriend)
router.delete('/', ctrl.deleteFriend)

module.exports = router