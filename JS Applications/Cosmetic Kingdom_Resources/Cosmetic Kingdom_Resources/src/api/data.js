import { get, del, post, put } from "./api.js";

export async function getAll(){
    return get('/data/products?sortBy=_createdOn%20desc')
}

export async function getById(id){
    return get(`/data/products/${id}`)
}

export async function deleteById(id){
    return del(`/data/products/${id}`)
}

export async function create(data){
    return post('/data/products', data)
}

export async function editById(id, data){
    return put(`/data/products/${id}`, data)
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
