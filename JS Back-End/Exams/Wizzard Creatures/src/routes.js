const router = require('express').Router();

const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')
const postsController = require('./controllers/postsController')

router.use(homeController)
router.use('/users', authController)
router.use('/posts', postsController )
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;