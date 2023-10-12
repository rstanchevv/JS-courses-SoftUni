const router = require('express').Router();
const {isAuth} = require('../middlewares/authMiddleware')


const { getNumberOfPetsByOwner } = require('../managers/petManager');
const userManager = require('../managers/userManager');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register',async (req, res) => {
    const {username, email, password, rePassword} = req.body;

    try{
        const token = await userManager.register({username, email, password, rePassword})
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
    const {username, password} =  req.body;

    try{
        const token = await userManager.login(username, password)
        res.cookie('token', token)
        res.redirect('/')
    } catch(err){
        res.render('auth/login', {error: getErrorMessage(err), username})
    }
})


router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('token');

    res.redirect('/')
})

router.get('/:id/my-profile',isAuth, async (req, res) => {
    const petsByOwner = await getNumberOfPetsByOwner(req.user._id)?.lean();
    const numberOfPets = petsByOwner.length;
    res.render('general/profile', {petsByOwner, numberOfPets})
})


module.exports = router;