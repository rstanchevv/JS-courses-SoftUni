const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [3, 'Username should be at least 3 characters long.']
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password should be at least 4 characters.']
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists!'],
        minLength: [10, 'Email should be at least 10 characters.']
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;