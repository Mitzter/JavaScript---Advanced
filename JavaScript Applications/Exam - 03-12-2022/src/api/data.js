import { get, post, put, del } from "./api.js";

//change X 

export async function getAll(){
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function getById(id){
    return get('/data/albums/' + id);
}

export async function deleteById(id){
    return del('/data/albums/' + id);
}

export async function createAlbum(xData){
    return post('/data/albums', xData);
}

export async function editAlbum(id, xData){
    return put('/data/albums/' + id, xData);
}

export async function postLike(albumId){
    return post('/data/likes', albumId)
}

export async function getAlbumLikes(albumId){
    return get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function getUserLike(albumId, userId){
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}