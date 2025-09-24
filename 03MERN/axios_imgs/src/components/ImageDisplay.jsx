import styles from "./ImageDisplay.module.css"

const ImageDisplay = ({image, loading}) => {
    if (loading) return <p>Cargando imagen...</p>

    if (!image) return <p>No se pudo cargar la imagen 😵</p>

    return (
        <>
            <div className={styles.imgContainer}>
                <img 
                src={image.src.large} 
                alt={image.alt || "Imagen aleatoria"} />
                <p>©{image.photographer}</p>
            </div>
        </>
    )
}

export default ImageDisplay