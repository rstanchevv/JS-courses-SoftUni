const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const gamesController = require('./controllers/gamesController')

router.use(homeController)
router.use('/users', authController)
router.use('/games', gamesController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;