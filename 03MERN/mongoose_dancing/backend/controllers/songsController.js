import Song from "../models/songsModel.js"

export const listSongs = async (_req, res) => {
    var songList = await Song.find({});
    return res.json(songList);
}

export const addSong = async (req, res) => {
    try {
        let songAdded = await Song.create(req.body);

        return res.status(201).json(songAdded);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    };
}

export const getOneSong = async (req, res) => {
    let songFound = await Song.findById(req.params.id);
    return res.status(200).json(songFound);
    }