const mongoose = require('mongoose');
const dbName = `wildlife`
const connectionString = `mongodb://localhost:27017/${dbName}`

module.exports = async (app) => {
    try{
        await mongoose.connect(connectionString)
        console.log('db connected successfully');
    } catch(err){
        console.log(err.message)
    }
}