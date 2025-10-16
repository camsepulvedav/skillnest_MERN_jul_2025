import axios from "axios"

const API_URL =  "http://localhost:3000/playlists";

export const getAllPlaylists = () => {
    return axios.get(API_URL);
}

export const createPlaylist = (playlistData) => {
    return axios.post(API_URL, playlistData);
}

export const addSongToPlaylist = (playlistId, songId) => {
    return axios.post(`${API_URL}/${playlistId}/songs`, {songId});
}