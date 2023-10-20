const router = require('express').Router();
const {  getAllCryptos, searchForCrypto }= require('../managers/cryptoManager');
const {isAuth} = require('../middlewares/authMiddleware')


router.get('/', (req, res) => {
    res.render('general/home')
})
router.get('/search',isAuth,async (req,res) => {
    try{
        const cryptos = await getAllCryptos().lean()
        res.render('general/search', {cryptos})
    } catch(err){
        res.render('general/search', {error: 'Unable to load crypto offers!'})
    }
    
})

router.post('/search', async (req, res) => {
    const {name, paymentMethod} = req.body;

    try{
        const cryptos =await searchForCrypto(name, paymentMethod).lean();
        res.render('general/search', {cryptos})
    } catch(err){
        res.render('general/search', {error: 'Unable to load crypto offers!'})
    }
})

router.get('/404', (req, res) => {
    res.render('general/404')
})

module.exports = router;