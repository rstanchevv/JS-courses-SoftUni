import { get, del, post, put } from "./api.js";

export async function getAll(){
    return get('/data/shoes?sortBy=_createdOn%20desc')
}

export async function getById(id){
    return get(`/data/shoes/${id}`)
}

export async function deleteById(id){
    return del(`/data/shoes/${id}`)
}

export async function create(data){
    return post('/data/shoes', data)
}

export async function editById(id, data){
    return put(`/data/shoes/${id}`, data)
}

export async function getBought(productId){
    return get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`)
}

export async function addBuy(id) {
    return post(`/data/bought`, id);
}

export async function isBought(productId,userId) {
    return get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function searchProduct(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
}