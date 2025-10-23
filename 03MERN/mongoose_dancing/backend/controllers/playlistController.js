import Playlist from "../models/playlistModel.js";

export const listPlaylist = async (_req, res) => {
  try {
    let playlists = await Playlist.find({}).populate("songs");
    return res.json(playlists);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPlaylist = async (req, res) => {
  try {
    let newPlaylist = await Playlist.create(req.body);
    return res.status(201).json(newPlaylist);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updatePlaylist = async (req, res) => {
  try {
    let playlistUpdate = await Playlist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("songs");
    if (!playlistUpdate) {
      return res.status(404).json({ message: "Playlist no encontrada" });
    }
    return res.json(playlistUpdate);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const deletePlaylist = async (req, res) => {
  try {
    await Playlist.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Playlist eliminada exitosamente" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getOnePlaylist = async (req, res) => {
  try {
    let playlistFound = await Playlist.findById(req.params.id).populate(
      "songs"
    );
    if (!playlistFound) {
      return res.status(404).json({ message: "Playlist no encontrada" });
    }
    return res.status(200).json(playlistFound);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
