import { get, del, post, put } from "./api.js";

export async function getAll(){
    return get('/data/albums?sortBy=_createdOn%20desc')
}

export async function getById(id){
    return get(`/data/albums/${id}`)
}

export async function deleteById(id){
    return del(`/data/albums/${id}`)
}

export async function create(data){
    return post('/data/albums', data)
}

export async function editById(id, data){
    return put(`/data/albums/${id}`, data)
}

export async function getLikes(albumId){
    return get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`)
}

export async function addLike(id) {
    return post(`/data/likes`, id);
}

export async function isLiked(albumId,userId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
