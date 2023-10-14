const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: ['First name field is required!'],
        minLength: 3,
    },
    lastName: {
        type: String,
        required:true,
        minLength: 3,
    },
    email: {
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'Username already exists!'],
        minLength: 10,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
})

userSchema.pre('save', function() {
    this.email = this.email.toLowerCase();
})

const User = mongoose.model('User', userSchema);

module.exports = User;