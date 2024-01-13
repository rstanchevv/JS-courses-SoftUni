const Auction = require('../models/Auction');

exports.createAuction = (houseData) => Auction.create(houseData)

exports.getAuctions = () => Auction.find();

exports.getAuctionDetails = (auctionId) => Auction.findById(auctionId).populate('bidder');

exports.makeABid =async (auctionId, userId, newPrice) => {
    const auction =await Auction.findById(auctionId);

    if (userId == auction.bidder){
        throw new Error('User is the current bidder!')
    }
    if (newPrice <= auction.price){
        throw new Error('The bid price is less than the current price of the auction.')
    }
    auction.price = newPrice;
    auction.bidder = userId;
    auction.save();
}

exports.updateAuction = (auctionId, auctionData) => Auction.findByIdAndUpdate(auctionId, auctionData)

exports.deleteAuction = (auctionId) => Auction.findByIdAndRemove(auctionId)