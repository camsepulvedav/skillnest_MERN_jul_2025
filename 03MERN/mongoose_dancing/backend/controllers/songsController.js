import Song from "../models/songsModel.js";

export const listSongs = async (_req, res) => {
  try {
    let songList = await Song.find({});
    return res.json(songList);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addSong = async (req, res) => {
  try {
    let songAdded = await Song.create(req.body);
    return res.status(201).json(songAdded);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updateSong = async (req, res) => {
  try {
    let songUpdate = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!songUpdate) {
      return res.status(404).json({ message: "Canción no encontrada" });
    }
    return res.json(songUpdate);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteSong = async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Canción eliminada exitosamente" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getOneSong = async (req, res) => {
  try {
    let songFound = await Song.findById(req.params.id);
    if (!songFound) {
      return res.status(404).json({ message: "Canción no encontrada" });
    }
    return res.status(200).json(songFound);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
