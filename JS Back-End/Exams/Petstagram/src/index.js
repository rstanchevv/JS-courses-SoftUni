const express = require('express');
const {port} = require('./configs/config')
const {dbName} = require('./configs/config')
const handlebars = require('express-handlebars')
const routes = require('./routes');
const path = require('path');
const db = require('mongoose');
const cookieParser = require('cookie-parser')
const { auth } = require('./middlewares/authMiddleware');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', 'src/views')

db.connect(`mongodb://localhost:27017/${dbName}`)
.then(() => console.log('DB connected successfully.'))
.catch(err => console.log('DB Error:', err.message))


app.use(express.static(path.resolve(__dirname,  'public')));
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(auth)

app.use(routes)

app.listen(3000, () => console.log(`Server listening on port ${port}`))