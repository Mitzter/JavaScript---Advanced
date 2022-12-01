import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";
const notification = document.getElementsByClassName('notification')[0];

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
<nav>
    <a href="/catalog">All Memes</a>


    ${!hasUser ? html`
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/">Home Page</a>
    </div>
    `: html`
    <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${hasUser.email}</span>
            <a href="/profile">My Profile</a>
            <a @click=${onLogout}href="javascript:void(0)">Logout</a>
        </div>
    </div>
    `}

</nav>

        
`

export function updateNav() {
    notification.style.display = "none";
    errorBox.innerText = "";
    const user = getUserData();
    render(navTemplate(user), nav);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}