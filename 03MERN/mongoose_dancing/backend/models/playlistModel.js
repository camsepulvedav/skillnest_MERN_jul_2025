import mongoose from "mongoose"

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "DEBE ingresar un nombre para la playlist"],
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
        required: true
    }],
}, {timestamps: true});

const Playlist = mongoose.model("Playlist", playlistSchema, "playlists");

export default Playlist;