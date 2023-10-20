const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')

router.use(homeController)
router.use('/users', authController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;