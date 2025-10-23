import axios from "axios";

const API_URL = "http://localhost:3000/playlists";

export const getAllPlaylists = () => {
  return axios.get(API_URL);
};

export const createPlaylist = (playlistData) => {
  return axios.post(API_URL, playlistData);
};

export const updatePlaylist = (id, playlistData) => {
  return axios.put(`${API_URL}/${id}`, playlistData);
};

export const deletePlaylist = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const getOnePlaylist = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
