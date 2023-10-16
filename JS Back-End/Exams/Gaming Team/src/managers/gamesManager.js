const Game = require('../models/Game');

exports.getAllGames = () => Game.find();

exports.createGame = (gameData) => Game.create(gameData)

exports.getGameDetails = (gameId) => Game.findById(gameId)

exports.buyGame =async (gameId, buyer) => {
    const game =await Game.findById(gameId);
    game.boughtBy.push(buyer)
    game.save();
}

exports.updateGame = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData)

exports.deleteGame = (gameId) => Game.findByIdAndRemove(gameId)

exports.findGame =(name, platform) => {
    if (platform.length == 0){
        return Game.find({name: { "$regex": name, "$options": "i"}});
    } else {
        return Game.find({name: { "$regex": name, "$options": "i"}, platform: platform})
    }
    

}