import { del, get, post, put } from "./api.js";

export async function getAll(){
    return get('/data/theaters?sortBy=_createdOn%20desc');
}

export async function getById(id){
    return get (`/data/theaters/`+ id);
}

export async function deleteById(id){
    return del('/data/theaters/' + id);
}

export async function createPost(postData){
    return post('/data/theaters/', postData)
}

export async function editPost(id, postData){
    return put('/data/theaters/'+ id, postData);
}

export async function getMyPosts(id){

    return get(`/data/theaters?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)
}

export async function postLike(data){
    return post('/data/likes/', data);
}

export async function getLike(id){
    return get(`/data/likes?where=theaterId%3D%22${id}%22&distinct=_ownerId&count`)
}

export async function getLikeUser(id, userId){
    return get(`/data/likes?where=theaterId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}