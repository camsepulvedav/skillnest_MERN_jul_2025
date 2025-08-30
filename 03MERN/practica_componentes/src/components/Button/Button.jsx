import { useState } from "react";
import styles from "./Button.module.css";

const Button = ({title}) => {
    const [eliminado, setEliminado] = useState (false);
    const click = () => {
        setEliminado (true);
    }

    return(
        <button onClick={click} className="button"> {title} </button>
        {
            eliminado && <p>Persona Eliminada :(</p>
        }
    )
}

export default Button