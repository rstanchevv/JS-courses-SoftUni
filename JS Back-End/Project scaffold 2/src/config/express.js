const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const path = require('path')

module.exports = (app) => {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }))
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
    app.use('/static', express.static(path.resolve(__dirname, '../static')))
    app.use(express.urlencoded({
        extended: false
    }))
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: 'auto'
        }
    }))
}