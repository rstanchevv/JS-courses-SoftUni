const {
  createAnimal,
  getAnimals,
  getDetails,
  updateAnimal,
  deleteAnimal,
  donateForAnimal,
} = require("../managers/animalsManager");
const { getErrorMessage } = require("../utils/errorHelpers");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  try {
    const animals = await getAnimals().lean();
    res.render("animals/dashboard", { animals });
  } catch (err) {
    res.render("animals/dashboard", { error: "Posts cannot be displayed!" });
  }
});

router.get("/create", (req, res) => {
  res.render("animals/create");
});

router.post("/create", async (req, res) => {
  try {
    const animalData = {
      ...req.body,
      owner: req.user._id,
    };
    await createAnimal(animalData);
    res.redirect('/animals/catalog')
  } catch (err) {
    res.render("animals/create", { error: getErrorMessage(err) });
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    const currentAnimal = await getDetails(req.params.id).lean();
    function hasDonated(){
        let hasDonated = false;
        for (const user of currentAnimal.donations) {
            if (user == req.user?._id){
                hasDonated = true;
            }
        }
        return hasDonated
    }
    const isOwner = req.user?._id == currentAnimal.owner._id;
    res.render("animals/details", { currentAnimal, hasDonated: hasDonated(), isOwner });
  } catch (err) {
    if (err.name == 'CastError'){
        res.render('animals/details', {error: 'Invalid url!'})
    } else {
        res.render('animals/details', {error:getErrorMessage(err)})
    }
  }
});

router.get('/details/:id/edit', async (req, res) => {
  try {
    const animal =await getDetails(req.params.id).lean();
    res.render("animals/edit", { animal });
  } catch (err) {
    res.render("animals/edit", { error: getErrorMessage(err) });
  }
});

router.post('/details/:id/edit',async (req,res) => {
    try{
        await updateAnimal(req.params.id, req.body);
        res.redirect(`/animals/details/${req.params.id}`)
    } catch(err){
        res.render('animals/edit', {error: getErrorMessage(err)})
    }
})

router.get('/details/:id/delete', async(req, res) => {
    try{
        await deleteAnimal(req.params.id);
        res.redirect('/animals/catalog')
    } catch(err){
        console.log(err)
    }
})

router.get('/details/:id/donate', (req, res) => {
    try{
        donateForAnimal(req.params.id, req.user._id);
        res.redirect(`/animals/details/${req.params.id}`)
    } catch(err){
        res.render('animals/details', {error: getErrorMessage(err)})
    }
})

module.exports = router;
