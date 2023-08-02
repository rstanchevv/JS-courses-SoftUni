import * as api from './api.js';

const endpoints = {
    'movies': '/data/movies/',
    'create': '/data/movies/',
    'getMovieById': '/data/movies/',
    'delete': '/data/movies/',
    'update': '/data/movies/',
}

export async function getMovies(){
    return api.get(endpoints.movies);
}

export async function createMovie(ideaData){
    return api.post(endpoints.create, ideaData)
}

export async function getMovieById(id){
    return api.get(endpoints.getMovieById + id)
}

export async function deleteMovie(id){
    return api.delete(endpoints.delete + id)
}

export async function updateMovie(id){
    return api.put(endpoints.update + id)
}



