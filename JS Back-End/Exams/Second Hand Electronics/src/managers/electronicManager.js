const Electronic = require('../models/Electronic')

exports.addElectronic = (electronicData) => Electronic.create(electronicData)

exports.getElectronics = () => Electronic.find();

exports.getElectronicDetails = (electronicId) => Electronic.findById(electronicId)

exports.buyElectronic =async (electronicId, userId) => {
    const electronic = await Electronic.findById(electronicId);
    electronic.buyingList.push(userId);
    electronic.save();
}

exports.deleteElectronic = (electronicId) => Electronic.findByIdAndDelete(electronicId)

exports.editElectronic =async (electronicId, electronicData) => Electronic.findByIdAndUpdate(electronicId, electronicData )

exports.searchElectronic = (name, type) => Electronic.find({name: {"$regex": name, "$options": "i"}, type: {"$regex": type, "$options": "i"}})