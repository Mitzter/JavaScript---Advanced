import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${books.length == 0 ? html`<p class="no-books">No books in database!</p>`:
            html`<ul class="other-books-list">
               ${books.map(catalogCardTemplate)}
               </ul>`}
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
               
            </ul>
            <!-- Display paragraph: If there are no books in the database -->
            <p class="no-books">No books in database!</p>
        </section>
`;

const catalogCardTemplate = (book) => html `
    <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>${book.type}</p>
                    <p class="img"><img src="${book.imageUrl}"></p>
                    <a class="button" href="/catalog/${book._id}">Details</a>
        </li>
`;

export async function showCatalog(ctx){
    const allBooks = await getAll();

    ctx.render(catalogTemplate(allBooks));
}