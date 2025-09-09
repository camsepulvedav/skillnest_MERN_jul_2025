import styles from "./List.module.css"

const List = ({notes}) => {
    if (notes.length === 0) {
        return(
        <div>
            <p>No hay notas para mostrar</p>
        </div>
        )
    }

    return (
        <div className={styles.list}>
            {notes.map (note => (
                <div className={styles.note}>
                    <p>{note.text}</p>
                    <button className={styles.deleteBtn}>Eliminar</button>
                </div>
            )
            )}
        </div>
    )
} 

export default List