const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path')
const bodyParser = express.urlencoded({extended: true});

const {addBreed, getBreeds, getCats, addCat, editCat, shelterCat} = require('./db')


const app = express();
app.use(bodyParser)

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs');


app.use(express.static(path.join(__dirname), + 'public'));

app.get('/', (req,res) => {
    const cats = getCats();
    res.render('home', {cats})
})
app.get('/cats/add-breed', (req,res) => {
    res.render('addBreed')
})
app.get('/cats/add-cat', (req,res) => {
    const breed = getBreeds();
    res.render('addCat', {breed});
})
app.post('/cats/add-breed', (req, res) => {
    addBreed(req.body.breed)
    res.render('addBreed')
})
app.post('/cats/add-cat', (req, res) => {
    addCat(req.body.name, req.body.description, req.body.image, req.body.breed)
    const cats = getCats();
    res.render('home', {cats})
})


app.get('/cats/edit/:id', (req, res) => {
    const cats = getCats();
    const currentCat = cats.find(x => x.id === req.params.id);
    res.render('editCat', currentCat)
})

app.post('/cats/edit/:id',(req, res) => {
    const id = req.params.id;
    editCat(id, req.body.name, req.body.description, req.body.image, req.body.breed);
    const cats = getCats();
    res.render('home', {cats})
})

app.get('/cats/new-home/:id', (req,res) => {
    const cats = getCats()
    const currentCat = cats.find(x => x.id === req.params.id);
    res.render('catShelter', currentCat)
})

app.post('/cats/new-home/:id', (req, res) => {
    const id = req.params.id;
    shelterCat(id);
    const cats = getCats();
    res.render('home', {cats})
})

app.get('/search', (req, res) => {
    console.log(req)
    res.render('home')
})

app.listen(5000, () => {
    console.log('server listening')
})