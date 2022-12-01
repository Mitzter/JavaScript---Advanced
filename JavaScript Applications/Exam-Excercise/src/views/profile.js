import { getAll } from "../api/data.js"
import { html } from "../lib.js"

const myProfileTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        ${books.length == 0 ? html`<p class="no-books">No books in database!</p>`:
    books.map(myBookTemplate)}
    </ul>

    <!-- Display paragraph: If the user doesn't have his own books  -->
    
</section>
`

const myBookTemplate = (book) => html`

    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/catalog/${book._id}">Details</a>
    </li>

    
`

export async function showMyProfile(ctx) {
    const books = await getAll();
    const userId = ctx.user._id;
    const myBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i]._ownerId == userId) {
            myBooks.push(books[i]);
        }
    }

    ctx.render(myProfileTemplate(myBooks))
}
