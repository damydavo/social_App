const express = require('express')
const { register, login, getUser, updateUser, deleteUser, followUser, unfollowUser } = require('../controller/userController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()


router.post('/', register)
router.post('/login', login)
router.route('/:id').get(protect, getUser).put(protect, updateUser).delete(protect, deleteUser)
router.route('/:id/follow').put(protect, followUser)
router.route('/:id/unfollow').put(protect, unfollowUser)



module.exports = router 