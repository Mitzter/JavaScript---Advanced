import {del, get, post, put} from "./api.js";

export async function getAll(){
    return get('/data/books?sortBy=_createdOn%20desc');
}

export async function getById(id){
    return get('/data/books/' + id);
}

export async function deleteById(id){
    return del('/data/books/' + id);
}

export async function createBook(gameData){
    return post('/data/books', gameData);
}


export async function editBook(id, gameData){
    return put ('/data/books/' + id, gameData)
}


