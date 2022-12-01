import { addComment, deleteById, getById, getComments } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const textArea = document.getElementById('textArea');
const attach = document.getElementById('commentUl');
const detailsTemplate = (game, comments, hasUser, isOwner, onDelete, createComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>Bright</h1>
            <span class="levels">${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>
        ${!hasUser ? nothing : html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${createComment} class="form">
                <textarea id="textArea" name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>` }
        ${!isOwner ? nothing : html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>
        `}

       
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul id='commentUl'>
                ${comments.length == 0 ? html`<p class="no-comment">No comments.</p>` :
            comments.map(commentTemplate)}
        
        
            </ul>
        </div>
        
        
       

    </div>

    <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->


</section>
`;

const commentTemplate = (comment) => html`
<li class="comment">
    <p>${comment.comment}</p>
</li>
`

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const game = await getById(id);
    const comments = await getComments(game._id);
    const hasUser = !!ctx.user;
    const isOwner = hasUser && ctx.user._id == game._ownerId;
    ctx.render(detailsTemplate(game, comments, hasUser, isOwner, onDelete, createSubmitHandler(createComment)))
    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/');
        }
    }

    async function createComment(hasUser, {comment}) {
        

        await addComment({
            gameId: game._id,
            comment,
        });


    }

    


}