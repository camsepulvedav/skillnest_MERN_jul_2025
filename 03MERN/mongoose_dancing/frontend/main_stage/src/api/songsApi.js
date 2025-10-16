import axios from "axios"

const API_URL = "http://localhost:3000/canciones";

export const getAllSongs = () => {
    return axios.get(API_URL);
}

export const getOneSong = (id) => {
    return axios.get(`${API_URL}/${id}`);
}

export const createSong = (songData) => {
    return axios.post(API_URL, songData);
}