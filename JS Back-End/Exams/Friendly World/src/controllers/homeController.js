const { getLastThreeAdded, findAnimals } = require('../managers/animalsManager');
const { getErrorMessage } = require('../utils/errorHelpers');

const router = require('express').Router();

router.get('/',async (req, res) => {
    try{
        const animals = await getLastThreeAdded().lean();
        res.render('general/home', {animals})
    } catch(err){
        res.render('general/home', {error: getErrorMessage(err)})
    }
})

router.get('/search', (req,res) => {
    res.render('general/search')
})

router.post('/search',async (req, res) => {
    try{
        const animals = await findAnimals(req.body.location).lean()
        console.log(animals)
        res.render('general/search', {animals})
    } catch(err){
        console.log(err)
    }

})

router.get('/404', (req, res) => {
    res.render('general/404')
})

module.exports = router;