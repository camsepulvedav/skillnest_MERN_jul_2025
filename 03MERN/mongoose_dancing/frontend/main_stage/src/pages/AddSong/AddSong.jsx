import styles from "./AddSong.module.css"

const AddSong = () => {
    return (
        <div className={styles.form}>
            <h1>Nueva canción</h1>
                <div className={styles.field}>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" placeholder="Ingresar el título de la canción"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="artist">Artista:</label>
                    <input type="text" id="artist" placeholder="Ingresar el nombre del artista"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="genre">Género:</label>
                    <input type="text" id="genre" placeholder="Ingresar el género"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="album">Álbum:</label>
                    <input type="text" id="album" placeholder="Ingresar el nombre del álbum"/>
                </div>
                <button type="submit">Agregar canción</button>
        </div>
    )
}

export default AddSong