import { get, del, post, put } from "./api.js";

export async function getAll(){
    return get('/data/facts?sortBy=_createdOn%20desc')
}

export async function getById(id){
    return get(`/data/facts/${id}`)
}

export async function deleteById(id){
    return del(`/data/facts/${id}`)
}

export async function create(data){
    return post('/data/facts', data)
}

export async function editById(id, data){
    return put(`/data/facts/${id}`, data)
}

export async function getLikes(factId){
    return get(`/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`)
}

export async function addLike(id) {
    return post(`/data/likes`, id);
}

export async function isLiked(factId,userId) {
    return get(`/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
