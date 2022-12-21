import { html, nothing } from "../lib.js";
import { getById, deleteById, getAlbumLikes, getUserLike, postLike } from "../api/data.js";
import { del } from "../api/api.js";


const detailsTemplate = (post, hasUser, isOwner, onDelete, postLikes, userLikeStatus, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${post.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${post.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${post.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${post.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${post.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${post.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${postLikes}</span></div>

        ${isOwner ? html`
        <div id="action-buttons">
            <a href="/edit/${post._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>
        ` : nothing}

        ${hasUser && !isOwner && !userLikeStatus ? html`
        <div id="action-buttons">
            <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
        </div>
        ` : nothing}
        <!--Edit and Delete are only for creator-->

    </div>
</section>
`;

const detailsTemplateTwo = () => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src=${post.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${post.singer}</span></p>
                <p>
                    <strong>Album name:</strong><span id="details-album">${post.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${post.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${post.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${post.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${postLikes}</span></div>
    
            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${post._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
            ` : nothing}
    
            ${hasUser && !isOwner && !userLikeStatus ? html`
            <div id="action-buttons">
                <a href="javascript:void(0)" id="like-btn">Like</a>
            </div>
            ` : nothing}
            <!--Edit and Delete are only for creator-->
    
        </div>
    </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const post = await getById(id);
    const user = ctx.user;
    if (user) {
        const userId = ctx.user._id;
        const userLikeStatus = await getUserLike(id, userId);
        const hasUser = !!ctx.user;
        const isOwner = hasUser && ctx.user._id == post._ownerId;
        const postLikes = await getAlbumLikes(post._id);
        ctx.render(detailsTemplate(post, hasUser, isOwner, onDelete, postLikes, userLikeStatus, onLike));

    } else {
        const hasUser = !!ctx.user;
        const isOwner = hasUser && ctx.user._id == post._ownerId;

        const postLikes = await getAlbumLikes(post._id);


        ctx.render(detailsTemplate(post, hasUser, isOwner, onDelete, postLikes, false));
    }



    async function onDelete() {
        const choice = confirm("Are you sure you want to delete this post?");

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog')
        }
    }


    async function onLike() {
        await postLike({
            albumId: post._id,
        })

        ctx.page.redirect('/catalog/' + id);
    }
}