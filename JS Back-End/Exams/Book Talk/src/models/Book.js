const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [2, 'The Title should be at least 2 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required!'],
        minLength: [5, 'The Author should be at least 5 characters']
    },
    image: {
        type: String,
        match: [/https?:\/\//, 'Invalid url!'],
        required: [true, 'Image is required!']
    },
    bookReview: {
        type: String,
        required: [true, 'Book Review is required!'],
        minLength: [10, 'The Review should be at least 10 characters']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        minLength: [3, 'The Genre should be at least 3 characters']
    },
    stars: {
        type: Number,
        required: [true, 'Stars is required'],
        min: [1, 'Number must be between 1-5'],
        max: [5, 'Number must be between 1-5']
    },
    wishingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;