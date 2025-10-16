import { useState, useEffect } from "react"
import {getAllSongs} from "../../api/songsApi"
import {Link} from "react-router"
import styles from "./Home.module.css"

const Home = () => {
    const [songs, setSongs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchSongs = async () => {
        try {
            const response = await getAllSongs();
            console.log("Canciones recibidas:", response.data);
            setSongs(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Hubo un problema al tratar de obtener las canciones", error);
            setError(error.message);
            setLoading(false);
        }
    }; 

    useEffect(() => {
        fetchSongs();
    }, []);

    const filteredSongs = songs.filter(song => {
        if (!song) return false;
        const title = String(song.title || "");
        const artist = String(song.artist || "");
        const genre = String(song.genre || "");
        const search = searchTerm.toLocaleLowerCase();

        return title.toLowerCase().includes(search) ||
                artist.toLowerCase().includes(search) ||
                genre.toLowerCase().includes(search);
    });

    if (loading){
        return (
            <div className={styles.mainContainer}>
                <h1>Cargando, por favor espere un momento...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.mainContainer}>
                <h1>Error: {error}</h1>
            </div>
        );
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <h1>Todas las canciones</h1>
                <input 
                type="text" 
                placeholder="Buscar canción por nombre, artista o género" 
                className={styles.searchInput}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
            <div className={styles.songsList}>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Artista</th>
                            <th>Género</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSongs.length === 0? (
                            <tr>
                                <td colSpan="3" style={{textAlign: "center"}}>
                                    No hay canciones para mostrar 💔
                                </td>
                            </tr>
                        ) : (
                            filteredSongs?.map(song => (
                            <tr key={song._id}>
                                <td>
                                    <Link to={`/canciones/${song._id}`} className={styles.link}>
                                        {song.title}
                                    </Link>
                                </td>
                                <td>{song.artist}</td>
                                <td>{song.genre}</td>
                            </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home