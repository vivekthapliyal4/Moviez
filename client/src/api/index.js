import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:8000/'})

export const getMovies = () => {
    return API.get('/movies')
}

export const removeItem = (id) => {
    return API.delete(`/movies/${id}`)
}