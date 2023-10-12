const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    cubes: Number
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;