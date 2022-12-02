import { html, nothing } from "../lib.js";
import { getById,deleteById } from "../api/data.js";

const detailsTemplate = (post, hasUser, isOwner, onDelete) => html`
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${post.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${post.brand}</li>
                    <li><span>Model:</span>${post.model}</li>
                    <li><span>Year:</span>${post.year}</li>
                    <li><span>Price:</span>${post.price}$</li>
                </ul>

                <p class="description-para">${post.description}</p>
                ${hasUser && isOwner ? html`
                <div class="listings-buttons">
                    <a href="/edit/${post._id}" class="button-list">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
                </div>
                ` : nothing }
                
            </div>
        </section>
`;

export async function showDetails(ctx){
    const id = ctx.params.id;
    const post = await getById(id);

    const hasUser = !!ctx.user; 
    const isOwner = hasUser && ctx.user._id == post._ownerId;

    ctx.render(detailsTemplate(post, hasUser, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm("Are you sure you want to delete this post?");

        if(choice){
            await deleteById(id);
            ctx.page.redirect('/catalog')
        }
    }
}