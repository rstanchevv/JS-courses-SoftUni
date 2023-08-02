import page from '../node_modules/page/page.mjs'
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { render } from '../node_modules/lit-html/lit-html.js'
import { isAuthenticated } from './services/authService.js';
import { detailsView } from './views/detailsPage.js';
import { logoutView } from './views/logoutView.js';
const root = document.querySelector('#root');
document.getElementById('search').addEventListener('submit', searchHandler);
updateNav();

page(renderMiddleware)
page('/', homeView)
page('/login', loginView)
page('/movies/:id', detailsView)
page('/logout', logoutView)
page('/movies', homeView)
page.start();


function renderMiddleware(ctx, next){
    ctx.updateNav = updateNav;
    ctx.render = (templateResult) => render(templateResult, root);
    next();
}

function updateNav(){
    if (isAuthenticated()){
        document.querySelectorAll('.user').forEach(e => e.style.display = 'block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
    }
}

function searchHandler(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get('search');
    e.target.reset();
    page.redirect(`/movies?search=${search}`)
}