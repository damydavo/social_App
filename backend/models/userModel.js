const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please add a name'],
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        unique: true,
        max: 50
    },
    password: {
        type: String,
        min: 6,
        required: [true, 'Password cannot be empty']
    },
    profileImg: {
        type: String,
        default: ''
    },
    coverImg: {
        type: String,
        default: ''
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)