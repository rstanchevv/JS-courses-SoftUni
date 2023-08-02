import { createMovie } from "../api/data.js";

const section = document.getElementById('add-movie');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit)

let ctx = null;

export function showCreate(context){
    ctx = context
    context.showSection(section)
}

async function onSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target);
    const title = formData.get('title')
    const description = formData.get('description')
    const img = formData.get('img')

    await createMovie({title, description, img})
    ctx.goTo('/')
}