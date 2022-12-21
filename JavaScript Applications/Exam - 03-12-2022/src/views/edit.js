import { editAlbum, getById } from '../api/data.js';
import {html} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (post, onEdit) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder=${post.singer}  .value=${post.singer}/>
            <input type="text" name="album" id="album-album" placeholder=${post.album} .value=${post.album}/>
            <input type="text" name="imageUrl" id="album-img" placeholder=${post.imageUrl}  .value=${post.imageUrl}/>
            <input type="text" name="release" id="album-release" placeholder=${post.release} .value=${post.release}/>
            <input type="text" name="label" id="album-label" placeholder=${post.label}  .value=${post.label}/>
            <input type="text" name="sales" id="album-sales" placeholder=${post.sales}  .value=${post.sales}/>

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function showEdit(ctx){
    const id = ctx.params.id;
    const post = await getById(id);
    ctx.render(editTemplate(post, createSubmitHandler(onEdit)));

    async function onEdit({singer, album, imageUrl, release, label, sales}) {
        if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            return alert('All fields are required!')
        }

        await editAlbum(id, {
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
    });
        
        ctx.page.redirect('/catalog/' + id);
    }
}
