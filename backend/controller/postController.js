const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Post = require('../models/postModel')

//@desc get posts
//@route  GET/api/post:id
//@access  private

const getPost = asyncHandler(async (req, res) => {
    //using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(400)
        throw new Error("Cannot find user")
    }

    const post = await Post.findById(req.params.id)

    if (!post) {
        res.status(400)
        throw new Error('post not found')
    }

    if (post.user.toString() !== req.user.id) {
        res.status(400)
        throw new Error('Not authorized')
    }

    res.status(200).json(post)
})


//@desc create posts
//@route  POST/api/post
//@access  private

const createPost = asyncHandler(async (req, res) => {
    const { description, img } = req.body

    const post = await Post.create({
        description,
        img,
        user: req.user.id
    })

    res.status(200).json(post)
})


//@desc update post
//@route  PUT/api/post:id
//@access  private

const updatePost = asyncHandler(async (req, res) => {
    //Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const post = await Post.findById(req.params.id)

    if (!post) {
        res.status(404)
        throw new Error('Post not found')
    }

    if (post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })


    res.status(200).json(updatedPost)
})

//@desc like/dislike post
//@route  PUT/api/post:id
//@access  private

const likePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.user.id)) {
        await post.updateOne({ $push: { likes: req.user.id } })
        res.status(200).json('Post has been liked')
    } else {
        await post.updateOne({ $pull: { likes: req.user.id } })
        res.status(200).json("post disliked")
    }
})

//@desc get timeline post
//@route  GET/api/timeline
//@access  private

const getTimeline = asyncHandler(async (req, res) => {
    const currentUser = await User.findById(req.user.id)
    const userPost = await Post.find({ user: currentUser._id })
    const friendPost = await Promise.all(
        currentUser.following.map(friend => {
            return Post.find({ user: friend })
        })
    )
    if (!userPost && currentUser) {
        res.status(500)
        throw new Error('cannot find posts')
    }
    res.status(200).json(
        userPost.concat(...friendPost)
    )
})


//@desc Delete posts
//@route  DELETE/api/post:id
//@access  private

const deletePost = asyncHandler(async (req, res) => {
    //Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const post = await Post.findById(req.params.id)

    if (!post) {
        res.status(404)
        throw new Error('Post not found')
    }

    if (post.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    await post.deleteOne()

    res.status(200).json({ success: true })
})


module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost,
    likePost,
    getTimeline,
}