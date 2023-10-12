const express = require('express');
const expressConfig = require('./config/express')
const dbConfig = require('./config/database')
const routesConfig = require('./config/routes')

start()
async function start(){
    const app = express();
    expressConfig(app)
    dbConfig(app)
    routesConfig(app)
    
    app.get('/', (req, res) => {
        res.render('home')
    })

    app.listen(3000, () => console.log(`Server is listening on port 3000...`))
}

