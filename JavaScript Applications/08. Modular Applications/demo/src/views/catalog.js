import { html } from '../../node_modules/lit-html/lit-html.js';
import { repeat } from '../../node_modules/lit-html/directives/repeat.js';
import { getAll } from '../data/recipes.js';


const catalogTemplate = (recipes) => html`
<h2>Catalog</h2>
<a href=${`?page=${page - 1}`}>&lt;; Prev</a>
<a href=${`?page=${page + 1}`}>Next &gt;</a>
<ul>
    ${repeat(recipes, r => r._id, recipeCardTemplate)}
</ul>`;

const recipeCardTemplate = (recipe) => html`
<li><a href=${'/recipes/' + recipe._id}>${recipe.name}</a></li>`;


export async function showCatalog(ctx) {
    const page = Number(ctx.query.page) || 1;

    
    ctx.render(html`<p>Loading &hellip;</p>`);
    const recipes = await getAll(page);
    ctx.render(catalogTemplate(recipes, page));
}