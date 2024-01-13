const router = require('express').Router();

const { getElectronics, searchElectronic } = require('../managers/electronicManager');
const {isAuth} = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/', (req, res) => {
    res.render('general/home')
})
router.get('/search',isAuth, async (req,res) => {
    try{
        const electronics =await getElectronics().lean();
        res.render('general/search', {electronics})
    } catch(err){
        res.render('general/search', {error:getErrorMessage(err)})
    }
})

router.post('/search', isAuth, async(req, res) => {
    const {name, type} = req.body;

    try{
        const electronics = await searchElectronic(name, type).lean();
        res.render('general/search', {electronics})
    } catch(err){
        res.render('genera/search', {error:getErrorMessage(err)})
    }
})

router.get('/404', (req, res) => {
    res.render('general/404')
})

module.exports = router;