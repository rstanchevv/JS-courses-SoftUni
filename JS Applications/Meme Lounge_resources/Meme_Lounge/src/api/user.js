import { get, post } from "./api.js";
import { clearUserData, setUserData } from "./util.js";

export async function login(email, password){
    const {_id, email: resultEmail, username, gender, accessToken} = await post('/users/login', {email, password})
    setUserData({
        username,
        gender,
        _id,
        email,
        accessToken
    })
}

export async function register(username, email, password, gender){
    const {_id, email: resultEmail, username: resultUsername, gender: resultGender, accessToken} = await post('/users/register', {username, email, password, gender})
    setUserData({
        username,
        gender,
        _id,
        email,
        accessToken
    })
}

export async function logout(){
    get('/users/logout');
    clearUserData();
}