const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

//@desc Register a new user
//@route  /api/users
//@access  public

const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    //validate input fields
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }
    //check if user already exist

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exist')
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //register user
    const user = await User.create({
        username,
        email,
        password: hashPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user details')
    }

})

//Login user
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //get one user
    const user = await User.findOne({ email })
    //check if user matches
    if (user && (await bcrypt.compare(password, user.password))) {
        if (user) {
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)

            })
        }
    }
    else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

//@desc GetUser
//@route GET/api/user:id
//@access  public
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(400)
        throw new Error('Users not found')
    }
    res.status(200).json(user)
})

//@desc Update User
//@route PUT/api/users:id
//@access  private

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    const { username, email, password } = req.body

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (!user) {
        res.status(400)
        throw new Error('Not authorized')
    }

    const userUpdate = await User.findByIdAndUpdate(req.user.id, { $set: { username, email, password: hashPassword } }
        , { new: true })

    res.status(200).json(userUpdate)


})

//@desc follow a user
//@route PUT/api/users/:id/follow
//@access  private

const followUser = asyncHandler(async (req, res) => {
    if (req.user.id !== req.params.id) {
        const user = await User.findById(req.params.id)
        const currentUser = await User.findById(req.user.id)
        if (!user.followers.includes(req.user.id)) {
            await user.updateOne({ $push: { followers: req.user.id } })
            await currentUser.updateOne({ $push: { following: req.params.id } })
            res.status(200).json('User has been followed')
        } else {
            res.status(401)
            throw new Error('You are following the user already')
        }
    } else {
        res.status(403)
        throw new Error('You cannot follow yourself')
    }
})

//@desc unfollow a user
//@route PUT/api/users/:id/unfollow
//@access  private

const unfollowUser = asyncHandler(async (req, res) => {
    if (req.user.id !== req.params.id) {
        const user = await User.findById(req.params.id)
        const currentUser = await User.findById(req.user.id)
        if (user.followers.includes(req.user.id)) {
            await user.updateOne({ $pull: { followers: req.user.id } })
            await currentUser.updateOne({ $pull: { following: req.params.id } })
            res.status(200).json('User has been unfollowed')
        } else {
            res.status(401)
            throw new Error('You do not follow this user')
        }
    } else {
        res.status(403)
        throw new Error('You cannot unfollow yourself')
    }
})


//@desc Delete User
//@route DELETE/api/user/:id
//@access  private

const deleteUser = asyncHandler(async (req, res) => {
    //Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    await user.deleteOne()

    res.status(200).json({ success: true })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    register,
    login,
    getUser,
    updateUser,
    deleteUser,
    followUser,
    unfollowUser
}