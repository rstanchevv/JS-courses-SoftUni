const Animal = require('../models/Animal');

exports.createAnimal = (animalData) => Animal.create(animalData)

exports.getDetails = (animalId) => Animal.findById(animalId).populate('owner')

exports.getAnimals = () => Animal.find()

exports.getLastThreeAdded = () => Animal.find().sort({createdAt: -1}).limit(3)

exports.findAnimals = (animalLocation) => Animal.find({location: animalLocation});

exports.updateAnimal = (animalId, newData) => Animal.findOneAndUpdate({_id: animalId, ...newData})

exports.deleteAnimal = (animalId) => Animal.findByIdAndDelete(animalId)

exports.donateForAnimal =async (animalId, userId) => {
    const animal =await Animal.findById(animalId);
    animal.donations.push(userId);
    animal.save()
}