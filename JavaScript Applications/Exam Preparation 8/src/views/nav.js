import { html, render, page} from '../lib.js';
import { logout } from "../api/user.js";
import { getUserData } from "../util.js";

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
<nav>
                <a href="/catalog">Theater</a>
                <ul>
                    ${!hasUser ? html`
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    ` : html`
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/create">Create Event</a></li>
                    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>
                    `}
                    
                </ul>
            </nav>
`;

export function updateNav(){
    const user = getUserData();
    render(navTemplate(user), nav);
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}

