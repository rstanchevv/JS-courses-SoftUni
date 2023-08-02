import { get, del, post, put } from "./api.js";

export async function getAllEvents(){
    return get('/data/events?sortBy=_createdOn%20desc')
}

export async function getAnEvent(id){
    return get(`/data/events/${id}`)
}

export async function deleteEvent(id){
    return del(`/data/events/${id}`)
}

export async function createEvent(data){
    return post('/data/events', data)
}

export async function editAnEvent(id, data){
    return put(`/data/events/${id}`, data)
}

export async function getGoing(id){
    return get(`/data/going?where=eventId%3D%22${id}%22&distinct=_ownerId&count`)
}

export async function addGoing(id) {
    return post(`/data/going`, id);
}

export async function isGoingTo(eventId,userId) {
    return get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

