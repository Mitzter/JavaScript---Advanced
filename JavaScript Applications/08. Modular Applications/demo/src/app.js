import { page } from './lib.js';
import { render } from '../node_modules/lit-html/lit-html.js';

import { showAbout } from './views/about.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { notFound } from './views/notFound.js';


function decorateContext(ctx, next) {
    ctx.render = function (content) {
        render(content, document.querySelector('main'));
    };
    next();
}

function parseQuery(ctx,next){
    ctx.query = {};
    if(ctx.querystring){
        const query = Object.fromEntries(ctx.querystring
            .split('&')
            .map(e => e.split('=')));
            Object.assign(ctx.query, query);
    }
    
    

    next();
}

page(decorateContext);
page(parseQuery);
page('/index.html', '/');
page('/', showHome);
page('/recipes', showCatalog);
page('/create', showCreate);
page('/recipes/:id', showDetails);
page('/about', showAbout);
page('*', notFound);

page.start();