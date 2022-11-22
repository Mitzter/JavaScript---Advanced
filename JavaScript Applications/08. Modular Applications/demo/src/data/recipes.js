import { get } from './api.js';

const pageSize = 3;

const endpoints = {
    'recipes': `/data/recipes?sortBy=_createdOn%20desc`,
    'byId': '/data/recipes/',
    'search': (query) => `/data/recipes?`
};


export async function getAll(page, query) {
    let URL = endpoints.recipes;
    URL += `&pageSize=${pageSize}&offset=${(page - 1) * pageSize}`;
    if(query){
        URL += `&where=${encodeURIComponent(`name LIKE "${query}"`)}`
    }
    return get(URL);
}

window.getAll = getAll;

export async function getById(id) {
    return get(endpoints.byId + id);
}