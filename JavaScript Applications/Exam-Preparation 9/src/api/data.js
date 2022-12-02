import { get, post, put, del } from "./api.js";

//change X 

export async function getAll(){
    return get('/data/cars?sortBy=_createdOn%20desc');
}

export async function getById(id){
    return get('/data/cars/' + id);
}

export async function deleteById(id){
    return del('/data/cars/' + id);
}

export async function createCar(xData){
    return post('/data/cars', xData);
}

export async function editCar(id, xData){
    return put('/data/cars/' + id, xData);
}

export async function searchCar(query){
    return get('/data/cars?where=year%3D'+query);
}

export async function getMyPosts(id){
    return get(`/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)
}