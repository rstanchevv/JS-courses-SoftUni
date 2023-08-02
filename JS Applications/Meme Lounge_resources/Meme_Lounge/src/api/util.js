import { hideErrorMessage } from "./api.js";

export function getUserData(){
    const data = JSON.parse(sessionStorage.getItem('userData'));
    return data;
}

export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData(){
    sessionStorage.removeItem('userData');
}

export function createSubmitHandler(callback){
    return function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        callback(data);
    }
}

export function getNotified(err){
    const errorBox = document.querySelector('#errorBox');
    errorBox.style.display = 'block';
    errorBox.querySelector('span').textContent = err
    setTimeout(hideErrorMessage, 3000)
}

