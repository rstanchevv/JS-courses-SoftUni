const { createAuction, getAuctions, getAuctionDetails, makeABid, updateAuction, deleteAuction } = require('../managers/housesManager');
const { getErrorMessage } = require('../utils/errorHelpers');
const {isAuth} = require('../middlewares/authMiddleware')

const router = require('express').Router();

router.get('/create',isAuth, (req, res) => {
    res.render('auctions/create')
})

router.post('/create',isAuth, async (req, res) => {
    const auctionData = {
        ...req.body,
        author: req.user._id
    }
    try{
        await createAuction(auctionData)
        res.redirect('/')
    }catch (err){
        res.render('auctions/create', {error: getErrorMessage(err)})
    }
})

router.get('/catalog',async (req,res) => {
    try{
        const auctions =await getAuctions().lean();
        res.render('auctions/browse', {auctions})
    } catch(err){
        res.render('auctions/browse', {error: getErrorMessage(err)})
    }
})

router.get('/:id/details',async (req, res) => {
    const auctionId = req.params.id;
    const currentUser = req.user?._id
    try{
        const auction =await getAuctionDetails(auctionId).lean()
        const isOwner = currentUser == auction.author;
        const isBidder = currentUser == auction.bidder?._id;
        const isGuest = !currentUser
        const hasBidder = Boolean(auction.bidder)
        res.render('auctions/details', {auction, isOwner, isBidder, isGuest, hasBidder})
    }catch(err){
        res.render('auctions/details', {error: getErrorMessage(err)})
    }
})

router.post('/:id/details', isAuth, async(req, res) => {
    const auctionId = req.params.id;
    const currentUser = req.user?._id;
    const {bidSum} = req.body;
    try{
        await makeABid(auctionId, currentUser, bidSum);
        setTimeout(() => res.redirect(`/auctions/${auctionId}/details`), 100)
    }catch(err){
        const auction =await getAuctionDetails(auctionId).lean()
        const isOwner = currentUser == auction.author;
        const isBidder = currentUser == auction.bidder._id;
        const isGuest = !currentUser
        const hasBidder = Boolean(auction.bidder)
        res.render('auctions/details', {error:getErrorMessage(err),auction, isOwner, isBidder, isGuest, hasBidder})
    }
})

router.get('/:id/edit', isAuth, async (req, res) => {
    const auctionId = req.params.id;

    try{
        const auction = await getAuctionDetails(auctionId).lean();

        ['estate', 'vehicles', 'furniture', 'electronics', 'other']
        function getOptions(){
            const titles = ['Real estate', 'Vehicles', 'Furniture', 'Electronics', 'Other'];
            const values = {
                'Real estate': 'estate',
                'Vehicles': 'vehicles',
                'Furniture': 'furniture',
                'Electronics': 'electronics',
                'Other': 'other'
            }

            const options = titles.map((title) => ({
                title: title,
                value: values[title],
                selected: auction.category == values[title]
            }))

            return options;
        }
        
        const hasBidder = Boolean(auction.bidder);
        res.render('auctions/edit', {auction, hasBidder, options: getOptions()})
    } catch(err){
        res.render('auctions/edit', {error: getErrorMessage(err)})
    }
})

router.post('/:id/edit',isAuth, async (req, res) => {
    const auctionId = req.params.id;
    const auctionData = req.body;

    try{
        await updateAuction(auctionId, auctionData);
        res.redirect(`/auctions/${auctionId}/details`)
    } catch(err){
        res.render('auctions/edit', {error: getErrorMessage(err)})
    }
})

router.get('/:id/delete', isAuth, async(req, res) => {
    const auctionId = req.params.id;

    try{
        await deleteAuction(auctionId);
        res.redirect('/auctions/catalog')
    } catch(err){
        res.render('auction/details', {error: getErrorMessage(err)})
    }
})

module.exports = router;