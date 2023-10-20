const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const bookController = require('./controllers/bookController')

router.use(homeController)
router.use('/users', authController)
router.use('/books', bookController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;