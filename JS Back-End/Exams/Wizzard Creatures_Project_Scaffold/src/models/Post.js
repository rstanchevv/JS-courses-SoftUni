const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters!']
    },
    species: {
        type: String,
        required: [true, 'Species is required!'],
        minLength: [3, 'Species should be at least 3 characters!']
    },
    skinColour: {
        type: String,
        required: [true, 'Skin colour is required!'],
        minLength: [3, 'Skin colour should be at least 3 characters!']
    },
    eyeColour: {
        type: String,
        required: [true, 'Eye colour is required!'],
        minLength: [3, 'Eye colour should be at least 3 characters!']
    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Invalid url']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description should be at least 5 characters!'],
        maxLength: [500, 'Description should be less than 500 characters!'],
    },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Post = mongoose.model('Post', postSchema);



module.exports = Post;