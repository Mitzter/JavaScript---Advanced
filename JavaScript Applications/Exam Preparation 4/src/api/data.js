import { del, get, post, put } from "./api.js";

export async function getAll(){
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export async function getById(id){
    return get (`/data/posts/`+ id);
}

export async function deleteById(id){
    return del('/data/posts/' + id);
}

export async function createPost(postData){
    return post('/data/posts/', postData)
}

export async function editPost(id, postData){
    return put('/data/posts/'+ id, postData);
}