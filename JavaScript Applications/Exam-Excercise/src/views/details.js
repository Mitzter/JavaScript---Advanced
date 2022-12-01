import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (userId, book, hasUser, isOwner, onDelete) => html`
<section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    ${!hasUser ? html`<div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>` 
                     : nothing}

                    ${ userId !== book._ownerId? html`<a class="button" href="#">Like</a>`
                    : html`
                    
                    <a class="button" href="/edit/${book._id}">Edit</a>
                    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a> 
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>`}
                   
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>

`


export async function showDetails(ctx){
    const id = ctx.params.id;
    const book = await getById(id);

    const hasUser = !!ctx.user;
    const isUserOwner = false;

    const user = getUserData();
    if(user){
        let userId = user._id;
        const isOwner = hasUser && ctx.user._id == book._ownerId;
        ctx.render(detailsTemplate(userId, book, hasUser, isOwner, onDelete))
    }else{
        const isOwner = hasUser && ctx.user._id == book._ownerId;
        ctx.render(detailsTemplate(book, hasUser, isOwner, onDelete))
    }
    
    
    

    

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/');
        }
    }
}