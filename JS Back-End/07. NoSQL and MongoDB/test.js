const mongoose = require('mongoose');
const Cube = require('./Cube')

async function run(){
    await mongoose.connect('mongodb://localhost:27017/testDB');
    console.log('Connected')
}

run()


async function createCube(){
    await Cube.create({name: 'pesho', cubes: 23}); 
}

createCube()