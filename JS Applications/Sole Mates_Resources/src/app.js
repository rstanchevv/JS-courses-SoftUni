import { logout } from './api/user.js';
import { getUserData } from './api/util.js';
import {page, render} from './lib.js';
import { showCatalog } from './views/catalog.js';
import { createView } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEditView } from './views/edit.js';
import { showHome } from './views/home.js';
import { layoutTemplate } from './views/layout.js';
import { showLogin } from './views/login.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';

const root = document.getElementById('wrapper');

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
page('/search', searchView)

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;
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





