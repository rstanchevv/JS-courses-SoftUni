import { get, del, post, put } from "./api.js";

export async function getAll() {
  return get("/data/memes?sortBy=_createdOn%20desc");
}

export async function getById(id) {
  return get(`/data/memes/${id}`);
}

export async function deleteById(id) {
  return del(`/data/memes/${id}`);
}

export async function create(data) {
  return post("/data/memes", data);
}

export async function editById(id, data) {
  return put(`/data/memes/${id}`, data);
}

export async function getMyMemes(userId){
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getBought(productId) {
  return get(
    `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`
  );
}

export async function addBuy(id) {
  return post(`/data/bought`, id);
}

export async function isBought(productId, userId) {
  return get(
    `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
