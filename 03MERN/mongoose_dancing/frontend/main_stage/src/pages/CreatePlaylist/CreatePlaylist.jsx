import styles from "./CreatePlaylist.module.css"

const CreatePlaylist = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>Crear nueva playlists</h1>
            <div className={styles.playlistName}>
                <label htmlFor="playlistName">Nombre de la playlist:</label>
                <input type="text" id="playlistName" placeholder="Ingresar nombre para la playlist"/>
            </div>
            <div>
                <h2>Elegir canciones</h2>
                <div className={styles.listSongs}>
                    <div className={styles.checkSong}> 
                        <input type="checkbox" id="songAdded" />
                        <label htmlFor="songAdded">Canción A</label>
                    </div>
                    <div className={styles.checkSong}> 
                        <input type="checkbox" id="songAdded" />
                        <label htmlFor="songAdded">Canción B</label>
                    </div>
                </div>
            </div>
            <button>Crear playlist</button>
        </div>
    )
}

export default CreatePlaylist