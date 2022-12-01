import { html, render, page} from '../lib.js';
import { logout } from "../api/user.js";
import { getUserData } from "../util.js";

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
<nav>
    <a href="/">Dashboard</a>

    ${!hasUser? html `<div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>` : html`
    <div id="user">
        <a href="/posts">My Posts</a>
        <a href="/create">Create Post</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>`}
   
    
</nav>`;

export function updateNav(){
    const user = getUserData();
    render(navTemplate(user), nav);
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}

