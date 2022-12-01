import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const myPostsTemplate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    <div class="my-posts">
        ${posts.lenght == 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>` : 
    posts.map(postTemplate)}

        
    </div>
    <!-- Display a div with information about every post (if any)-->
    

    <!-- Display an h1 if there are no posts -->
    
</section>`

const postTemplate = (post) => html`
<div class="post">
            <h2 class="post-title">${post.title}</h2>
            <img class="post-image" src=${post.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/catalog/${post._id}" class="details-btn btn">Details</a>
            </div>
        </div>`
export async function showMyPosts(ctx){
    const posts = await getAll();
    const userId = ctx.user._id;
    const myPosts = [];
    for(let i = 0; i < posts.length; i++){
        if(posts[i]._ownerId == userId){
            myPosts.push(posts[i]);
        }
    }

    ctx.render(myPostsTemplate(myPosts));

}