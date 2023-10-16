const { SECRET } = require('../configs/config');
const jwt = require('../lib/jwt');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login =async (email, password) => {
    const user =await checkForExistingUser(email)
    
    if (!user) {
        throw new Error ('Email or password wrong');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid user or password!')
    }

    const token = await generateToken(user)

    return token;
}

exports.register =async (userData) => {
    const user = await checkForExistingUser(userData.email)
    if (user){
        throw new Error('Username has already been used!')
    }
    if (userData.password !== userData.rePassword){
        throw new Error(`Passwords don't match!`)
    }
    
    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash;

    const createdUser =await User.create(userData);

    const token = await generateToken(createdUser);

    return token;
}

const checkForExistingUser =async (email) => {
    const user = await User.findOne({email: email});
    return user;
}

function generateToken(user){
    
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    };

    const token = jwt.sign(payload, SECRET, {
        expiresIn: '2d'
    });

    return token;
}