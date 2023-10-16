const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [4, 'The name should be at least 4 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/https?:\/\//, 'Invalid url']
    },
    price: {
        type: String,
        required: [true, 'Price is required!'],
        min: [1, ['The price should be a positive number.']]
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        minLength: [2, 'Description should be at least 2 characters']
    },
    platform: {
        type: String,
        enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
        required: [true, 'Platform is required!'],
    },
    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;