import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "DEBE ingresar un título de canción"], 
        minLength: [6, "El título no puede tener menos de 6 caracteres"], 
        maxLength: [255, "El título no puede exceder los 255 caracteres"]
    },
    artist: {
        type: String, 
        required: [true, "DEBE ingresar un nombre de artista"], 
        minLength: [10, "El nombre del artista no puede tener menos de 10 caracteres"], 
        maxLength: [255, "El nombre del artista no puede exceder los 255 caracteres"]
    },
    yearOfRelease: {
        type: Number, 
        required: [true, "DEBE ingresar un año de lanzamiento"], 
        validate: {
            validator: function(value) {
                return value >=1920 && value <=2025;
            },
            message: "El año DEBE tener 4 dígitos y estar entre 1920-2025"
    }},
    genre: {
        type: String, 
        required: [true, "DEBE ingresar un género"]  
    },
    album: {
        type: String,
        required: [true, "DEBE ingresar un nombre de álbum"]
    }
}, {timestamps:true});

const Song = mongoose.model("Song", songSchema, "songs"); 

export default Song;