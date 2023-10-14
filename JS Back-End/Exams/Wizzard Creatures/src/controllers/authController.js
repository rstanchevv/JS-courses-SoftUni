const router = require('express').Router();

const userManager = require('../managers/userManager');
const { getErrorMessage } = require('../utils/errorHelpers');

const { isAuth} = require('../middlewares/authMiddleware');
const { getOwnPosts } = require('../managers/postsManager');

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register',async (req, res) => {
    const {firstName, lastName, email, password, rePassword} = req.body;
    try{
        const token = await userManager.register({firstName, lastName, email, password, rePassword})
        res.cookie('token', token);
        res.redirect('/')
    } catch(err) {
        res.render('auth/register', {error: getErrorMessage(err), firstName, lastName, email})
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

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('token');

    res.redirect('/')
})

router.get('/profile/:id',async (req, res) => {
    

    try{
        const posts =await getOwnPosts(req.params.id).lean()
        res.render('auth/my-posts', {posts})
    } catch(err){
        res.render('auth/my-posts', {error: getErrorMessage(err.message)})
    }
    
})

module.exports = router;