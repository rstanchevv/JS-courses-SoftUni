const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const cryptosController = require('./controllers/cryptosController')

router.use(homeController)
router.use('/users', authController)
router.use('/cryptos', cryptosController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;