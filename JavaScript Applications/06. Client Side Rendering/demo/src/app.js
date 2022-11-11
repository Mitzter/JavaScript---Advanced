import { render } from "./template.js";

const username = `Peter`;
const items = [
    'Product 1',
    `Product 2`,
    `Product 3`,
];
const ctx = {
    username,
    items
}
const views = {
    'home-link': `home`,
    'catalog-link': `catalog`,
    'about-link': `about`
}



document.querySelector('nav').addEventListener('click', async (event) => {
    debugger
    if(event.target.tagName == 'A'){
        const view = views[event.target.id];
        if(view !== undefined){
            document.querySelector('main').innerHTML = await render(view, ctx);
        }
    }
})




