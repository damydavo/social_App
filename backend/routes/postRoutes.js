const express = require('express')

const { protect } = require('../middleware/authMiddleware')
const { createPost, getPost, updatePost, deletePost } = require('../controller/postController')

const router = express.Router()


router.route('/').post(protect, createPost)
router.route('/:id').get(protect, getPost).put(protect, updatePost).delete(protect, deletePost)

module.exports = router