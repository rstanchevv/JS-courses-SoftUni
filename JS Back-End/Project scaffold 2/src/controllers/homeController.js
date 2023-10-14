const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('general/home')
})
router.get('/search', (req,res) => {
    res.render('general/search')
})

router.get('/404', (req, res) => {
    res.render('general/404')
})

module.exports = router;