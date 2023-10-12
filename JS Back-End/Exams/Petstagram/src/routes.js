const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const petController = require('./controllers/petController')

router.use(homeController)
router.use('/users', authController)
router.use('/pets', petController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;