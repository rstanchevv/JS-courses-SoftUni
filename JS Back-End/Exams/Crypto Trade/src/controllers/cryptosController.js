const { createCrypto, getAllCryptos, getCryptoDetails, buyCrypto, deleteCrypto, editCrypto } = require('../managers/cryptoManager');
const { getErrorMessage } = require('../utils/errorHelpers');
const {isAuth} = require('../middlewares/authMiddleware')

const router = require('express').Router();

router.get('/catalog',async (req, res) => {
    try{
        const cryptos =await getAllCryptos().lean();
        res.render('crypto/catalog', {cryptos})
    } catch(err){
        res.render('crypto/catalog', {error: getErrorMessage(err)})
    }
})

router.get('/create', isAuth, (req,res) => {
    res.render('crypto/create')
})

router.post('/create', isAuth, async (req, res) => {
    const cryptoData = {
        ...req.body,
        owner: req.user._id
    }
    try{
        await createCrypto(cryptoData);
        res.redirect('/cryptos/catalog')
    } catch(err){
        res.render('crypto/create', {error: getErrorMessage(err)})
    }
})

router.get('/:id/details',async (req,res) => {
    const cryptoId = req.params.id;
    const currentUserId = req.user?._id;
    try{
        const crypto = await getCryptoDetails(cryptoId).lean();
        const isOwner = req.user?._id == crypto.owner;
        const alreadyBought = () => {
            let alreadyBought = false;
            for (const buyer of crypto.cryptoBuyers) {
                if (buyer == currentUserId){
                    return alreadyBought = true;
                }
            }
            return alreadyBought;
        }
        const isGuest = !req.user;
        res.render('crypto/details', {crypto, isOwner, alreadyBought: alreadyBought(), isGuest})
    } catch(err){
        res.render('crypto/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/buy', isAuth, async(req, res) => {
    const cryptoId = req.params.id;
    const userId = req.user._id;
    try{
        await buyCrypto(cryptoId, userId);
        res.redirect(`/cryptos/${cryptoId}/details`)
    } catch(err){
        res.render('crypto/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/delete', isAuth, async(req, res) => {
    const cryptoId = req.params.id;

    try{
        await deleteCrypto(cryptoId);
        res.redirect('/cryptos/catalog')
    } catch(err){
        res.render('crypto/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/edit', isAuth, async (req, res) => {
    const cryptoId = req.params.id;
    try{
        const crypto =await getCryptoDetails(cryptoId).lean();
        function getOptions(){
            const paymentMethod = crypto.paymentMethod;
            
            const availablePaymentMethods = ['Crypto Wallet', 'Credit Card', 'Debit Card', 'Paypal']
            const values = {
                'Crypto Wallet': 'crypto-wallet',
                'Credit Card': 'credit-card',
                'Debit Card': 'debit-card',
                'Paypal': 'paypal'
            }
            const options = availablePaymentMethods.map((name) => ({
                name: name,
                value: values[name],
                selected: values[name] === paymentMethod
            }))
            return options;
        }
        res.render('crypto/edit', {crypto, options: getOptions()})
    } catch(err){
        res.render('crypto/details', {error: getErrorMessage(err)})
    }
})

router.post('/:id/edit', isAuth, async (req, res) => {
    const cryptoId = req.params.id;
    const cryptoData = req.body;

    try{
        await editCrypto(cryptoId, cryptoData);
        res.redirect(`/cryptos/${cryptoId}/details`)
    } catch(err){
        res.render('crypto/edit', {error: getErrorMessage(err)})
    }
})

module.exports = router;