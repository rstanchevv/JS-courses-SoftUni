const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [10, 'Name should be at least 10 characters.']
    },
    type: {
        type: String,
        required: true,
        minLength: [2, 'Type should be at least 2 characters.']
    },
    damages: {
        type: String,
        required: true,
        minLength: [10, 'Damage field should be at least 2 characters.']
    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Invalid url']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description should be at least 10 characters.'],
        maxLength: [20, 'Description should be maximum 200 characters.']
    },
    production: {
        type: Number,
        required: true,
        min: [1900, 'Production year cannot be less than 1900.'],
        max: [2023, 'Production year cannot be more than 2023.']
    },
    exploitation: {
        type: Number,
        required: true,
        min: [0, 'Years of exploitation cannot be less than 0.']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be less than 0.']
    },
    buyingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

electronicSchema.pre('findOneAndUpdate', function (next) {
    this.options.runValidators = true
    next()
})

const Electronic = mongoose.model('Electronic', electronicSchema);



module.exports = Electronic;