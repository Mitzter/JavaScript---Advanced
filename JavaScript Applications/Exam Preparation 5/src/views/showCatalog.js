import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (allGames) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    
    ${allGames.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>`
    : allGames.map(gameCardTemplate)}

    
    
</section>
`

const gameCardTemplate = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/catalog/${game._id}" class="details-button">Details</a>
    </div>
`

export async function showCatalog(ctx) {
    const allGames = await getAll();

    ctx.render(catalogTemplate(allGames));
}