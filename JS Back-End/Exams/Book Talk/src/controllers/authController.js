const router = require('express').Router();

const { getWishingListByOwner } = require('../managers/bookManager');
const userManager = require('../managers/userManager');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register',async (req, res) => {
    const {email, username, password, rePassword} = req.body;

    try{
        const token = await userManager.register({email: email.toLowerCase(), username: username.toLowerCase(), password, rePassword})
        res.cookie('token', token);
        res.redirect('/')
    } catch(err) {
        res.render('auth/register', {error: getErrorMessage(err), username, email})
    }
})


router.get('/login', (req,res) => {
    res.render('auth/login')
})

router.post('/login',async (req,res) => {
    const {email, password} =  req.body;

    try{
        const token = await userManager.login(email.toLowerCase(), password)
        res.cookie('token', token)
        res.redirect('/')
    } catch(err){
        res.render('auth/login', {error: getErrorMessage(err), email})
    }
})

router.get('/profile',async (req, res) => {
    const userId = req.user._id
    const ownerEmail = req.user.email
    const books =await getWishingListByOwner(userId).lean()

    res.render('auth/profile', {books, ownerEmail})
})

router.get('/logout', (req, res) => {
    res.clearCookie('token');

    res.redirect('/')
})

module.exports = router;