const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [4, 'Title should be at least 4 characters.']
    },
    description: {
        type: String,
        maxLength: [200, 'Description should be up to 200 characters.']
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
        enum: {
            values: ['estate', 'vehicles', 'furniture', 'electronics', 'other'],
            message: 'Invalid category'
        }
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: 0
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bidder: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
})

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;