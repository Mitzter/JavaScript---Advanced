/* import * as api from './api/user.js';

window.api = api; */

import {page, render} from "./lib.js"
import{getUserData} from "./util.js"
import { showLogin } from "./views/loginView.js";
import {updateNav}from "./views/nav.js"

const main = document.getElementById('main-content');
//document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);
page('/',()=> console.log('homeView') );
page('/home', ()=> console.log('homeView'));
page('/login', showLogin);
page('/register', ()=> console.log('registerView'));
page('/catalog', ()=> console.log('catalogView'));
page('/create', ()=> console.log('createView'));
page('/detail/:id', ()=> console.log('detailView'));
page('/edit/:d', ()=> console.log('editView'));
page('/search', ()=> console.log('searchView'));
//page('/register', () => console.log('register'));

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
    render(content, main);
}



