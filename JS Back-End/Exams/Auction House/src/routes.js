const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const auctionsController = require('./controllers/auctionsController')

router.use(homeController)
router.use('/users', authController)
router.use('/auctions', auctionsController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;