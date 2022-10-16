
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type : String,
        maxLength : 50
    },
    email: {
        type : String,
        trim : true,
        maxLength : 5
    },
    password: {
        type : String,
        maxLength : 5
    },
    lastname: {
        type : String,
        trim : true,
        maxLength : 5
    },
    role: {
        type : Number,
        default : 0
    },
    image: String,
    token: {
        type: String
    }, 
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User} 