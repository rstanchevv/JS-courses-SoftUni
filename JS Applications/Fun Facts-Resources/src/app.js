import { logout } from './api/user.js';
import { getUserData } from './api/util.js';
import {page, render} from './lib.js';
import { showCatalog } from './views/catalog.js';
import { createView } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEditView } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { registerView } from './views/register.js';

const root = document.getElementById('root');

page(decorateContext)
page('/index.html', showHome)
page('/', showHome)
page('/login', showLogin)
page('/register', registerView);
page('/catalog', showCatalog)
page('/details/:id', showDetails);
page('/logout', logoutAction)
page('/create', createView)
page('/details/edit/:id', showEditView)
updateNav()

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;
    ctx.updateNav = updateNav
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(content, root);
}

async function logoutAction(ctx){
    await logout();
    ctx.page.redirect('/')
}

function updateNav(){
    const user=getUserData();
    if(user){
       document.querySelector('nav .user').style.display="inline-block"; 
       document.querySelector('nav .guest').style.display="none"; 
    }else{
        document.querySelector('nav .user').style.display="none"; 
        document.querySelector('nav .guest').style.display="inline-block"; 
    }
}





