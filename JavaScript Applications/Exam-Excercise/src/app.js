
import { page, render} from './lib.js';
import { getUserData } from './util.js';

import { updateNav } from './views/nav.js';
import { showCatalog } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showMyProfile } from './views/profile.js';
import { showCreate } from './views/create.js';


const main = document.getElementById('site-content');

page(decorateContext)
page('/', showCatalog);
page('/catalog', showCatalog);
page('/profile', showMyProfile);
page('/create',  showCreate);
page('/login', showLogin );
page('/register', showRegister);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit );



updateNav();
page.start();

function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user){
        ctx.user = user;
    }

    next();

}

function renderMain(content){
    render(content,main);
}