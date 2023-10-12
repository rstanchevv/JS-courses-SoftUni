const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is mandatory!']
    },
    age: {
        type: String,
        required: [true, 'Age field is mandatory!'],
        min: 1,
        max: 100,
    },
    description: {
        type: String,
        required: [true, 'Description field is mandatory!'],
        minLength: [2, 'Name should be at least 2 characters'],
        minLength: [5, 'Description should be at least 5 characters.'],
        maxLength: [50, 'Description should be no more than 50 characters']
    },
    location: {
        type: String,
        required: [true, 'Location field is mandatory!']
    },
    image: {
        type: String,
        required: [true, 'Image field is mandatory!'],
        match: [/^https?:\/\//, 'Invalid url'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            message: {
                type: String,
                required: [true, 'Comments message is required!']
            }
        }
    ]
})

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;