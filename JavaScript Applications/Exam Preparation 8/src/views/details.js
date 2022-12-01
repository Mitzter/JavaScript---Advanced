import { deleteById, getById, getLike, postLike } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (post, hasUser, isOwner, onDelete, onLike, currentLikes) => html`
<section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${post.title}</h1>
                    <div>
                        <img src=${post.imageUrl} />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${post.description}</h4>
                    <h4>Author: ${post.author}</h4>
                    <div class="buttons">
                        ${isOwner ? html`
                        <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                        <a class="btn-edit" href="/edit/${post._id}">Edit</a> `:
                         html`
                         <a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>`
                        }
                        
                        
                    </div>
                    <p class="likes">Likes: ${currentLikes}</p>
                </div>
            </div>
        </section>
`

export async function showDetails(ctx){
    const id = ctx.params.id;
    const post = await getById(id);
    const currentLikes = await getLike(post._id)
    const hasUser = !!ctx.user; 
    const isOwner = hasUser && ctx.user._id == post._ownerId;

    ctx.render(detailsTemplate(post, hasUser, isOwner, onDelete, onLike, currentLikes));

    async function onDelete(){
        const choice = confirm("Are you sure you want to delete this post?");

        if(choice){
            await deleteById(id);
            ctx.page.redirect('/catalog')
        }
    }

    async function onLike({theaterId}){
        
        await postLike({
            theaterId: post._id
        });
        
    }
}