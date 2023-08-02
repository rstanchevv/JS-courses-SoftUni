import { register } from "../api/users.js";

const section = document.getElementById('form-sign-up');

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit)

let ctx = null;


export function showRegister(context){
    ctx = context
    context.showSection(section)
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword')
    try{
    const validations = password.length >= 6 && password === repass;
    if(validations){
        await register(email, password)
        form.reset();
        ctx.updateNav()
        ctx.goTo('/');

    } else {
        throw new Error('test')
    }
} catch(err){
    alert(err)
    throw err
}
}

