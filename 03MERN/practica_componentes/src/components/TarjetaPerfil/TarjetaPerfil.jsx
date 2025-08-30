import styles from "./TarjetaPerfil.module.css"

const TarjetaPerfil = ({nombre, edad, img, activo}) => {
    return (
        <div className= {activo ? styles.bordeContenedorActivo : styles.bordeContenedorInactivo}>
            <img src={img}/>
            <h3>Nombre: {nombre}</h3>
            <p>Edad: {edad}</p>
            {
                activo? <p>Este usuario está: <span style={{color: "green"}}>ACTIVO</span></p>:
                <p>Este usuario está: <span style={{color: "red"}}>INACTIVO</span></p>
            }
        </div>
    )
}

export default TarjetaPerfil