import {del, get, post, put} from "./api.js";

export async function getAll(){
    return get('/data/games?sortBy=_createdOn%20desc');
}

export async function getRecent(){
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function getById(id){
    return get('/data/games/' + id);
}

export async function deleteById(id){
    return del('/data/games/' + id);
}

export async function createGame(gameData){
    return post('/data/games', gameData);
}

export async function createComment(){
    return post('/data/comments')
}

export async function editGame(id, gameData){
    return put ('/data/games/' + id, gameData)
}

export async function addComment(data){
    return post('/data/comments', data)
}

export async function getComments(id){
    return get(`/data/comments?where=gameId%3D%22${id}%22`)
}