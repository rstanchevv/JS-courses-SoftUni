const Crypto = require('../models/Crypto')

exports.createCrypto = (cryptoData) => Crypto.create(cryptoData)

exports.getAllCryptos = () => Crypto.find();

exports.getCryptoDetails = (cryptoId) => Crypto.findById(cryptoId)

exports.buyCrypto =async (cryptoId, userId) => {
    const crypto =await Crypto.findById(cryptoId);
    crypto.cryptoBuyers.push(userId);
    crypto.save();
}

exports.deleteCrypto = (cryptoId) => Crypto.findByIdAndDelete(cryptoId)

exports.editCrypto = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData)

exports.searchForCrypto =(name, paymentMethod) => {
    return Crypto.find({name: { "$regex": name, "$options": "i"}, paymentMethod});
}