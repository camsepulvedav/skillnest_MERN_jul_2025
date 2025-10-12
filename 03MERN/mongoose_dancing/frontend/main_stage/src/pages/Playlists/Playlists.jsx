import styles from "./Playlists.module.css"

const Playlists = () => {
    return (
        <div>
            <h1>Todas las playlists</h1>
            <input type="text" placeholder="Buscar playlist por nombre"/>
            <div className={styles.playlistsList}>
                <a>Playlist 1</a>
                <a>Playlist 2</a>
            </div>
        </div>
    )
}

export default Playlists