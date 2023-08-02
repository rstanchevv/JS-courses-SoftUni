import { login } from "../api/users.js";

const section = document.getElementById('form-login')

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit)

let ctx = null;

export function showLogin(context){
    ctx = context;
    context.showSection(section)
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    await login(email, password)
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}