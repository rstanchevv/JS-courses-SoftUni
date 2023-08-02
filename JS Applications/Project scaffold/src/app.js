import {page, render} from './lib.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { registerView } from './views/register.js';
import { layoutTemplate, updateNav } from './views/layout.js';
import { getUserData } from './api/util.js';
import { createView } from './views/create.js';
import { showEdit } from './views/edit.js';
import { searchView } from './views/search.js';
import { logout } from './api/user.js';
const root = document.body;

page(decorateContext)
// page('/', showHome)
// page('/login', showLogin)
// page('/register', registerView);
// // page('/details/:id', showDetails);
page('/logout', logoutAction)

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;
    const user = getUserData();
    if (user){
        ctx.user = user;
    }
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root)
}

async function logoutAction(ctx){
    await logout();
    ctx.page.redirect('/')
}





