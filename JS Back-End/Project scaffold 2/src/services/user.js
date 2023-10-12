const User = require('../models/User')
const {hash, compare} = require('bcrypt');


// TODO all fields required by the exam
async function register(username, password){
    const existing =await getUserByUsername(username);
    console.log(existing)
    if (existing) {
        throw new Error('Username is already in use.')
    }
    const hashedPassword = await hash(password, 10);
    const user = await User.create({username, hashedPassword})

    return user;
}


// TODO change identified
async function login(username, password){
    const user = await getUserByUsername(username);

    if (!user){
        throw new Error('User does not exist');
    }
    const hasMatch = await compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect password')
    }

    return user;
}

//TODO identify user by given identifier
async function getUserByUsername(username){
    const user = await User.findOne({username: new RegExp(`^${username}$`, 'i')})
    return user;
}


module.exports = {
    login, register
}
