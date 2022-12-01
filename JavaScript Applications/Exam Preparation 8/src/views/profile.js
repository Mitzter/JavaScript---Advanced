import { getMyPosts } from "../api/data.js";
import { html } from "../lib.js";

const profileTemplate = (user, posts) => html`
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
                <!--If there are event-->
                
            ${posts.lenght == 0 ? html`
            <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>
            ` : posts.map(cardTemplate)}
                <!--If there are no event-->
                
            </div>
        </section>
`

const cardTemplate = (post) => html`
<div class="eventBoard">
                    <div class="event-info">
                        <img src=${post.imageUrl}>
                        <h2>${post.title}</h2>
                        <h6>${post.date}</h6>
                        <a href="/catalog/${post._id}" class="details-button">Details</a>
                    </div>
                </div>
`

export async function showProfile(ctx){
    const id = ctx.user._id;
    const user = ctx.user
    const posts = await getMyPosts(id);

    ctx.render(profileTemplate(user, posts))

}