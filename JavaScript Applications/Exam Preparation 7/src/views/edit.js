import { createMeme, editMeme, getById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { showNotification } from "./notification.js";
const notification = document.getElementsByClassName('notification')[0];
const errorBox = document.getElementById('errorBox');

const createTemplate = (meme, onEdit) => html`
<section id="edit-meme">
    <form @submit=${onEdit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}>

                        </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const meme = await getById(id);
    ctx.render(createTemplate(meme, createSubmitHandler(onEdit)))

    async function onEdit({ title, description, imageUrl }) {
        if (!title, !description, !imageUrl) {
            notification.style.display = "block";
            errorBox.innerText = "All fields are required!";
            return
           


           
        }

        await editMeme(id, {
            title,
            description,
            imageUrl
        });

        ctx.page.redirect('/catalog/' + id);
    }

    

}