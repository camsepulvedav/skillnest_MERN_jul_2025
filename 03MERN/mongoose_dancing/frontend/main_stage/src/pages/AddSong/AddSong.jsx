import { useState } from "react"
import {useNavigate} from "react-router"
import {createSong} from "../../api/songsApi"
import styles from "./AddSong.module.css"


const AddSong = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        genre: "",
        album: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await createSong(formData);
            console.log("Canción creada:" ,response.data);
            navigate("/");
        }catch (error) {
            console.error("No se pudo crear la canción", error);
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <div className={styles.form}>
            <h1>Nueva canción</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="title">Título:</label>
                    <input 
                        type="text" 
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange} 
                        placeholder="Ingresar el título de la canción"/>
                    {errors.title && <span className={styles.error}>{errors.title.message}</span>}
                </div>
                <div className={styles.field}>
                    <label htmlFor="artist">Artista:</label>
                    <input 
                        type="text" 
                        id="artist" 
                        name="artist"
                        value={formData.artist}
                        onChange={handleChange}
                        placeholder="Ingresar el nombre del artista"/>
                    {errors.artist && <span className={styles.error}>{errors.artist.message}</span>}
                </div>
                <div className={styles.field}>
                    <label htmlFor="genre">Género:</label>
                    <input 
                        type="text" 
                        id="genre" 
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        placeholder="Ingresar el género"/>
                    {errors.genre && <span className={styles.error}>{errors.genre.message}</span>}
                </div>
                <div className={styles.field}>
                    <label htmlFor="album">Álbum:</label>
                    <input 
                        type="text" 
                        id="album"
                        name="album"
                        value={formData.album}
                        onChange={handleChange}
                        placeholder="Ingresar el nombre del álbum"/>
                    {errors.album && <span className={styles.error}>{errors.album.message}</span>}
                </div>
                <button type="submit">Agregar canción</button>
            </form>
        </div>
    )
}

export default AddSong