import { get, del, post, put } from "./api.js";

export async function getAllFruits(){
    // return get('/data/fruits?sortBy=_createdOn%20desc')
}

export async function getAFruit(id){
    // return get(`/data/fruits/${id}`)
}

export async function deleteFruit(id){
    // return del(`/data/fruits/${id}`)
}

export async function createFruit(data){
    // return post('/data/fruits/', data)
}

export async function editFruit(id, data){
    // return put(`/data/fruits/${id}`, data)
}


