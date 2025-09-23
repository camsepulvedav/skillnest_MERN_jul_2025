import {Link} from "react-router"
import {artworks} from "../../data/artworks"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <>
        <h1 className={styles.h1}>Bienvenid@ a la Galería de Arte</h1>
        <h3 className={styles.h3}>Sección Art Nouveau</h3>
        <div className={styles.mainContainer}>
            {artworks.map (artwork => (
            <Link 
                key={artwork.id}
                to={`/art/${artwork.id}`}
                className={styles.iconNumber}>
                {artwork.id}
            </Link>
            ))}
        </div>
        </>
    )
}
    
export default Home