const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'Username already exists!'],
        minLength: [5, 'Username should be at least five characters long']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, `Password should be at least five characters long`]
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [4, `Password should be at least five characters long`]
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;