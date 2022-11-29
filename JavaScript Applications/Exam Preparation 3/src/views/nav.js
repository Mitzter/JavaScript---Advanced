import { logout } from '../api/user.js';
import {html, render, page} from '../lib.js'
import { getUserData } from '../util.js';

const nav = document.querySelector('header');

//navigation guest/user
const navTemplate = (hasUser) => html`
<nav>
          <div>
            <a href="/">Home</a>
            <a href="/catalog">Dashboard</a>
            <a href="/search/:id">Search</a>
          </div>
        ${!hasUser? html `<div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>` : html `<div class="user">
            <a href="/create">Add Pair</a>
            <a @click=${onLogout} id='logout-btn' href="javascript:void(0)">Logout</a>
          </div>
          `}
          
          

          
          
        </nav>
`;

export function updateNav(){
    const user = getUserData();
    render(navTemplate(user), nav);
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/catalog');
}