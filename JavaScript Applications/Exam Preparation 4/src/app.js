import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showMyPosts } from './views/myPosts.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('main-content');

page(decorateContext)
page('/', showCatalog);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
page('/posts', showMyPosts)

updateNav();
page.start();

function decorateContext (ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user){
        ctx.user = user;
    }
    next();
}

function renderMain(content){
    render(content, main);
}