import Playlist from "../models/playlistModel.js"

export const listPlaylist = async (_req, res) => {
    try {
        const playlists = await Playlist.find({}).populate("songs");
        return res.json(playlists);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createPlaylist = async (req, res) => {
    try {
        const newPlaylist = await Playlist.create(req.body);
        return res.status(201).json(newPlaylist);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}

export const addSongToPlaylist = async (req, res) => {
    try {
        const {songId} = req.body;
        const playlist = await Playlist.findById(req.params.id);

        if(!playlist) {
            return res.status(404).json({message: "No se encontró la playlist"});
        }

        playlist.songs.push(songId);
        await playlist.save();

        const updatedPlaylist = await Playlist.findById(req.params.id).populate("songs");
        return res.json(updatedPlaylist);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}