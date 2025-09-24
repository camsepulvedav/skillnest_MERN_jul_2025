import {useParams, useNavigate} from "react-router"
import {artworks} from "../../data/artworks"
import styles from "./ArtDetail.module.css"

const ArtDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const currentArtwork = artworks.filter(work => work.id === Number(id))[0]
    
    let currentIndex = -1
    for (let i = 0; i< artworks.length; i++) {
        if (artworks[i].id === Number(id)){
            currentIndex = i
            break
        }
    }

    const idValue = Number(id)
    if (idValue < 1 || idValue > artworks.length || currentIndex < 0 || currentIndex > artworks.length-1) {
        navigate("/")
        return null
    }

    if (!currentArtwork) {
        return <p>Obra no encontrada 🖼️🚫</p>
    }

    const goToPrevious =() => {
        const prevIndex = currentIndex > 0 ? currentIndex -1: artworks.length-1
        const prevId = artworks[prevIndex].id
        navigate(`/art/${prevId}`)
    }

    const goToNext =() => {
        const nextIndex = currentIndex < artworks.length-1 ? currentIndex +1: 0
        const nextId = artworks[nextIndex].id
        navigate(`/art/${nextId}`)
    }

    return (
        <>
        <div className={styles.frame}>
            <div className={styles.img}>
                <img src={currentArtwork.img} alt={currentArtwork.name} />
            </div>
        </div>
        <div id="navMenu">
            <p>"{currentArtwork.name}" - {currentArtwork.author} ({currentArtwork.year})</p>
            <button className={styles.btnArrow} onClick={goToPrevious}>← Anterior</button>
            <button className={styles.btnHome} onClick={() => navigate("/")}>Inicio</button>
            <button className={styles.btnArrow} onClick={goToNext}>Siguiente →</button>
        </div>    
        </>
    )
}

export default ArtDetail