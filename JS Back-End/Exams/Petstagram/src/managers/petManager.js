const Pet = require('../models/Pet')

exports.createPet = (petData) => Pet.create(petData);

exports.getPets = () => Pet.find().populate('owner')

exports.getPet = (id) => Pet.findById(id).populate('owner')

exports.deletePet = (id) => Pet.findByIdAndDelete(id)

exports.editPet = (id, data) => Pet.findByIdAndUpdate(id, data)

exports.addComment =async (petId, commentData) => {
    const photo = await Pet.findById(petId);
    photo.comments.push(commentData);
    return photo.save();
}
 
exports.getNumberOfPetsByOwner = (ownerId) => Pet.find({owner: ownerId});

exports.getNumberOfPets = (profileId) => Pet.find({owner: profileId});

exports.getOwner = (profileId) => Pet.findOne({owner: profileId}).populate('owner');

