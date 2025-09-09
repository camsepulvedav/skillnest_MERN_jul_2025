import styles from "./List.module.css"

const List = ({notes, onDeleteNote}) => {
    if (notes.length === 0) {
        return(
        <div className={styles.NoNotes}>
            <p>No hay notas para mostrar</p>
        </div>
        )
    }

    return (
        <div className={styles.list}>
            {notes.map ((note) => (
                <div className={styles.note} key={note.id}>
                    <p>{note.text} - <i>{note.priority}</i></p>
                    <button className={styles.deleteBtn} onClick={() =>onDeleteNote(note.id)}>Eliminar</button>
                </div>
            )
            )}
        </div>
    )
} 

export default List