import { useState, useEffect } from "react"
import {useNavigate} from "react-router"
import {createPlaylist} from "../../api/playlistApi.js"
import {getAllSongs} from "../../api/songsApi"
import styles from "./CreatePlaylist.module.css"

const CreatePlaylist = () => {
    const navigate = useNavigate();
    const [playlistName, setPlaylistName] = useState("");
    const [songs, setSongs] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const fetchSongs = async () => {
        try {
            const response = await getAllSongs(); 
            setSongs(response.data);
            setLoading(false);      
        } catch (error) {
            console.error("Hubo un error al obtener las canciones", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSongs();
    }, []);

    const handleCheckboxChange = (songId) => {
        if (selectedSongs.includes(songId)) {
            setSelectedSongs(selectedSongs.filter(id => id !== songId));
        } else {
            setSelectedSongs([...selectedSongs, songId]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const playlistData = {
                name: playlistName,
                songs: selectedSongs
            };
            const response = await createPlaylist(playlistData);
            console.log("Playlist creada:", response.data);
            navigate("/playlists");
        } catch (error) {
            console.error("Hubo un error al crear la playlist", error);
            setErrors(error.response.data.errors);
        }
    }

    if (loading) {
        return (
            <div className={styles.mainContainer}>
                <h1>Cargando, por favor espere...</h1>
            </div>
        );
    }

    return (
        <div className={styles.form}>
            <h1>Crear nueva playlists</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.playlistName}>
                    <label htmlFor="playlistName">Nombre de la playlist:</label>
                    <input 
                        type="text" 
                        id="playlistName" 
                        value={playlistName}
                        onChange={(event) => setPlaylistName(event.target.value)}
                        placeholder="Ingresar nombre para la playlist"/>
                </div>
                <div className={styles.songsCheckbox}>
                    <h2>Elegir canciones</h2>
                    {songs.length === 0 ? (
                        <p className={styles.noSongs}>
                            Todavía no hay canciones disponibles.
                        </p>
                    ) : (
                        <div className={styles.listSongs}>
                            {songs.map(song => (
                                <div key={song._id} className={styles.checkSong}>
                                    <input type="checkbox" 
                                    id={`song-${song._id}`}
                                    checked={selectedSongs.includes(song._id)}
                                    onChange={() => handleCheckboxChange(song._id)}/>
                                    <label htmlFor={`song-${song._id}`}>
                                        {song.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button type="submit">Crear playlist</button>
            </form>
        </div>
    )
}

export default CreatePlaylist