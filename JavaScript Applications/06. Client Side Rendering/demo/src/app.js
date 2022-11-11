const username = `Peter`;

const views = {
    'home-link': `<h2>Home Page</h2><p>Welcome, %%username%%</p>`,
    'catalog-link': `<h2>Catalog Page</h2>`,
    'about-link': `<h2>About Page</h2>`
}

document.querySelector('nav').addEventListener('click', (event) => {
    if(event.target.targName =='A'){
        const view = views[event.target.id];
        if(view !== undefined){
            render(view);
        }
    }
})


function render(html){
    const result = html.replace('%%username%%', username);
    document.querySelector('main').innerHTML = result;
}