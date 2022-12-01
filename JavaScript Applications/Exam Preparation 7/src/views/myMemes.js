import { getAll, getMyMemes } from "../api/data.js";
import { html } from "../lib.js";
const notification = document.getElementsByClassName('notification')[0];
notification.style.display = "none";

const profileTemplate = (user, memes) => html`
    <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src=${user.gender == 'female' ? "/images/female.png": "/images/male.png"}>
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${memes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${memes.length == 0 ? html`<p class="no-memes">No memes in database.</p>` 
                : memes.map(memeTemplate) }


                <!-- Display : If user doesn't have own memes  --> 
                
            </div>
        </section>

`;

const memeTemplate = (meme) => html`
    <div class="user-meme">
                    <p class="user-meme-title">${meme.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
                    <a class="button" href="/catalog/${meme._id}">Details</a>
        </div>
`;


export async function showProfile(ctx){
    const user = ctx.user;
    const memes = await getMyMemes(ctx.user._id);

    ctx.render(profileTemplate(user, memes));
}