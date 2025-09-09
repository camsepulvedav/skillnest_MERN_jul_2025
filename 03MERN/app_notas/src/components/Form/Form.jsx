import {useState } from 'react'
import styles from "./Form.module.css"

const Form = ({onAddNote}) => {
    const [noteText, setNoteText] = useState("");
    const [priority, setPriority] = useState("Baja");

    const handleSubmit =()=> {
        onAddNote(noteText,priority)
    }

    

    return (
    <>
    <input className={styles.input} 
            type="text" 
            placeholder='Escribe tu nota' 
            value={noteText}
            onChange ={ (e) => setNoteText(e.target.value)}/>
        <div className={styles.selectGrid}>
          <label htmlFor="priority">Prioridad: </label>
          <select className={styles.select}
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <button className={styles.addNoteBtn} onClick={handleSubmit}>Agregar Nota</button>
    </>
    )
}

export default Form