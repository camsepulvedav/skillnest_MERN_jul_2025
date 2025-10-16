import { useState, useEffect } from "react"
import {Link} from "react-router"
import {getAllPlaylists} from "../../api/playlistApi"
import styles from "./Playlists.module.css"

const Playlists = () => {
        const [playlists, setPlaylists] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const fetchPlaylist = async () => {
            try {
                const response = await getAllPlaylists();
                console.log("Playlists recibidas:", response.data);
                setPlaylists(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Hubo un problema para obtener las playlists", error);
                setError(error.message);
                setLoading(false); 
            }
        };
    
    useEffect(() => {
        fetchPlaylist();
    }, []);

    const filteredPlaylists = playlists.filter(playlist => {
        if (!playlist) return false;
        const name = String(playlist.name || "");
        const search = searchTerm.toLowerCase();

        return name.toLowerCase().includes(search);
    });

    if (loading) {
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
                <h1>Todas las playlists</h1>
                <input 
                type="text" 
                placeholder="Buscar playlist por nombre"
                className={styles.searchInput}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
            <div className={styles.playlistsList}>
                {filteredPlaylists.length === 0 ? (
                    <p className={styles.noPlaylists}>
                        {searchTerm ? "No se encontraron playlists" : "No hay playlists creadas aún"}
                    </p>
                ) : (
                    filteredPlaylists.map(playlist => 
                        <Link
                        key={playlist._id}
                        to={`/playlists/${playlist._id}`}
                        className={styles.link}>
                            <h3>{playlist.name}</h3>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default Playlists