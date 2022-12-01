import { html, nothing } from "../lib.js";
import { getById,deleteById } from "../api/data.js";

const detailsTemplate = (post, hasUser, isOwner, onDelete) => html`
<section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${post.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${post.title}</h2>
                        <p class="post-description">${post.description}</p>
                        <p class="post-address">${post.address}</p>
                        <p class="post-number">${post.phone}</p>
                        <p class="donate-Item">Donate Materials: 0</p>

                        
                        <!--Edit and Delete are only for creator-->
                        <div class="btns">
                        ${isOwner ? html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : html``}
                        ${hasUser ? html`<a href="#" class="donate-btn btn">Donate</a>` : html``} 
                            
                           
                        </div>

                    </div>
                </div>
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