const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const electronicController = require('./controllers/electronicController')

router.use(homeController)
router.use('/users', authController)
router.use('/electronics', electronicController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;