const { createPet, getPets, getPet, deletePet, editPet, addComment } = require('../managers/petManager');
const { getErrorMessage } = require('../utils/errorHelpers');
const {isAuth} = require('../middlewares/authMiddleware')


const router = require('express').Router();

router.get('/add', isAuth, (req, res) => {
    if (!req.user) {
        res.redirect('404')
    }
    res.render('pets/create')
})

router.get('/catalog',async (req, res) => {
    try{
        const pets =await getPets().lean();
        res.render('pets/catalog', {pets})
    } catch(err){
        res.render('pets/catalog', {error: getErrorMessage(err)})
    }
})

router.post('/add', isAuth, async (req, res) => {
    const petData = {
        ...req.body,
        owner: req.user._id
    }
    try{
        await createPet(petData)
        res.redirect('/pets/catalog')
    } catch(err){
        res.render('pets/create', {error: getErrorMessage(err)})
    }
})


router.get('/:id',async (req,res) => {
    try{
        const pet = await getPet(req.params.id).populate('comments.user').lean();
        const isOwner = req.user?._id == pet.owner._id;
        res.render('pets/details', {pet, isOwner})
    } catch(err){
        res.render('pets/details', {error: `Unable to get details.`})
    }
})

router.get('/:id/delete', isAuth, async (req, res) => {
    try{
        await deletePet(req.params.id)
        res.redirect('/pets/catalog')
    } catch(err){
        res.render('404')
    }
})

router.get('/:id/edit', isAuth, async (req, res) => {
    if(!req.user){
        res.redirect('404')
    }
    try{
        const pet = await getPet(req.params.id).lean();
        res.render('pets/edit', {pet})
    } catch(err){
        res.render(`pets/${req.params.id}`, {error: getErrorMessage(err)})
    }
})

router.post('/:id/edit', isAuth, async (req,res) => {
    const petId = req.params.id;
    const petData = req.body;
    try {
        await editPet(petId, petData)
        res.redirect(`/pets/${petId}`)
    } catch(err){
        res.render(`pets/edit`, {error: 'Unsuccessful edit!', petData })
    }
})

router.post('/:id/comments', isAuth, async (req, res) => {
    const petId = req.params.id;
    const { message } = req.body;
    const user = req.user._id;

    try{
        await addComment(petId, {user, message});
        res.redirect(`/pets/${petId}`)
    } catch(err){
        res.render('pets/details', {error: `Unable to add comment due to ${err}`})
    }
})


module.exports = router;