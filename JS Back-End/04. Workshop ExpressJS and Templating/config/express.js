const express = require('express')();
const handlebars = require('express-handlebars');
const bodyParser = express.urlencoded({extended: true});
const path = require('path')


module.exports = (app) => {
    
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }))
    app.set('view engine', 'hbs')
    app.set('views', './views')

    app.use(bodyParser)

    // app.use(path.join(__dirname), + 'public')
};