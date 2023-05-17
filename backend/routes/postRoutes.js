const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { createPost, getPost, updatePost, deletePost, likePost, getTimeline } = require('../controller/postController')

const router = express.Router()

router.route('/').post(protect, createPost)
router.route('/:id').get(protect, getPost).put(protect, updatePost).delete(protect, deletePost)
router.route('/:id/like').put(protect, likePost)
router.route('/timeline/all').get(protect, getTimeline)


module.exports = router