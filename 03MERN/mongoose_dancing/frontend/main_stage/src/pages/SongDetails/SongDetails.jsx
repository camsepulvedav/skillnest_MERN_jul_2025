import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router"
import {getOneSong} from "../../api/songsApi"
import styles from "./SongDetails.module.css"

const SongDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await getOneSong(id);
                console.log("Canción obtenida:", response.data);
                setSong(response.data);
                setLoading(false);
            } catch (error) {
                console.error("No se pudo obtener la canción", error);
                setError(error.message);
                setLoading(false);            
            }
        };
        fetchSong();
    }, [id]);

    if (loading) return <div className={styles.mainContainer}><h1>Cargando, por favor espere...</h1></div>
    if (error) return <div className={styles.mainContainer}><h1>Error: {error}</h1></div>
    if (!song) return <div className={styles.mainContainer}><h1>Canción no encontrada 💔</h1></div>

    return (
        <div className={styles.mainContainer}>
            <h1>Detalles de la canción</h1>
            <div className={styles.detailCard}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#8019e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-headphones">
                    <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
                    <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                </svg>
                <h2>{song.title || "No especificado"}</h2>
                <div className={styles.data}>
                    <p className={styles.tag}>Interpretada por</p>
                    <p className={styles.value}>{song.artist || "No especificado"}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.tag}>Álbum</p>
                    <p className={styles.value}>{song.album || "No especificado"}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.tag}>Género</p>
                    <p className={styles.value}>{song.genre || "No especificado"}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.tag}>Año de lanzamiento</p>
                    <p className={styles.value}>{song.yearOfRelease || "No especificado"}</p>
                </div>
            </div>
            <button className={styles.backBtn} onClick={()=> navigate("/")}>Volver al inicio</button>
        </div>
    )
}

export default SongDetails