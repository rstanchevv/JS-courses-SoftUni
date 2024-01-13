const router = require('express').Router();
const {isAuth} = require('../middlewares/authMiddleware')

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

router.get('/logout',isAuth, (req, res) => {
    res.clearCookie('token');

    res.redirect('/')
})


module.exports = router;