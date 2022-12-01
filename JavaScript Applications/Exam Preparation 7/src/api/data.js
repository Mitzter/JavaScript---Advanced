import { del, get, post, put } from "./api.js";

export async function getAll(){
    return get('/data/memes?sortBy=_createdOn%20desc');
}

export async function getById(id){
    return get (`/data/memes/`+ id);
}

export async function deleteById(id){
    return del('/data/memes/' + id);
}

export async function createMeme(postData){
    return post('/data/memes/', postData)
}

export async function editMeme(id, postData){
    return put('/data/memes/'+ id, postData);
}

export async function getMyMemes(id){
    return get(`/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc
    `);
}