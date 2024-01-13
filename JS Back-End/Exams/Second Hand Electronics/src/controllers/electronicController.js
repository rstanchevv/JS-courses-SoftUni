const { addElectronic, getElectronics, getElectronicDetails, buyElectronic, deleteElectronic, editElectronic } = require('../managers/electronicManager');
const { getErrorMessage } = require('../utils/errorHelpers');

const {isAuth} = require('../middlewares/authMiddleware')

const router = require('express').Router();

router.get('/catalog',async (req, res) => {
    try{
        const electronics = await getElectronics().lean();
        res.render('electronics/catalog', {electronics})
    } catch(err){
        res.render('electronics/catalog', {error: getErrorMessage(err)})
    }
})

router.get('/create', isAuth,async (req,res) => {
    res.render('electronics/create')
})

router.post('/create',isAuth,async (req,res) => {
    const electronicData = {
        ...req.body,
        owner: req.user._id
    }
    try{
        await addElectronic(electronicData)
        res.redirect('/electronics/catalog')
    } catch(err){
        res.render('electronics/create', {error: getErrorMessage(err)})
    }
})

router.get('/:id/details', async (req,res) => {
    const electronicId = req.params.id;
    const currentUser = req.user?._id
    try{
        const electronic = await getElectronicDetails(electronicId).lean();
        const isOwner = currentUser == electronic.owner;
        const alreadyBought = () => {
            if (currentUser){
                let alreadyBought = false;
                for (const buyer of electronic.buyingList) {
                    if (buyer == currentUser){
                        alreadyBought = true;
                    }
                }
                return alreadyBought;
            } else {
                return false;
            }
        }
        const isGuest = !req.user
        res.render('electronics/details', {electronic, isOwner, alreadyBought: alreadyBought(), isGuest})
    } catch(err){
        res.render('electronics/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/buy',isAuth, async (req, res) => {
    const electronicId = req.params.id;
    const currentUser = req.user._id;
    try{
        await buyElectronic(electronicId, currentUser)
        res.redirect(`/electronics/${electronicId}/details`)
    } catch(err){
        res.render('electronics/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/delete',isAuth,async (req,res) => {
    const electronicId = req.params.id;
    try{
        await deleteElectronic(electronicId);
        res.redirect('/electronics/catalog')
    } catch(err){
        res.render('electronics/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/edit',isAuth,async (req, res) => {
    const elecronicId = req.params.id;

    try{
        const electronic =await getElectronicDetails(elecronicId).lean();
        res.render('electronics/edit', {electronic})
    } catch(err){
        res.render('electronics/details', {error: getErrorMessage(err)})
    }
})

router.post('/:id/edit',isAuth,async (req, res) => {
    const elecronicId = req.params.id;
    const electronicData = req.body;

    try{
        await editElectronic(elecronicId, electronicData)
        res.redirect(`/electronics/${elecronicId}/details`)
    } catch(err){
        res.render('electronics/edit', {error:getErrorMessage(err)})
    }
})


module.exports = router;