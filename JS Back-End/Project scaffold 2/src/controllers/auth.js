const router = require('express').Router();

const {register, login } = require('../services/user')



router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register',async (req, res) => {

    try{
        if (req.body.password !== req.body.rePassword){
            throw new Error('Wrong password');
        }
        const user = await register(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/')
    } catch(err){
        res.render('register', {username: req.body.username})
    }

})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login',async (req, res) => {
    try{
        const user =await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/')
    } catch(err){
        res.redirect('/login')
        console.log(err)
    }
})

module.exports = router;