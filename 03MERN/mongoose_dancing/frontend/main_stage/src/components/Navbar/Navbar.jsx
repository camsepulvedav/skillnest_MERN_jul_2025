import {NavLink} from "react-router"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav className= {styles.nav}>
            <NavLink to= "/" className= {({isActive}) => isActive? `${styles.menuOption} ${styles.isActive}` :styles.menuOption}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="42"  height="42"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M9 17v-13h10v13" />
                    <path d="M9 8h10" />
                </svg>
                <p>Canciones</p>
            </NavLink>
            <NavLink to= "/add" className= {({isActive}) => isActive? `${styles.menuOption} ${styles.active}` :styles.menuOption}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="42"  height="42"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M9 17v-13h10v8" />
                    <path d="M9 8h10" /><path d="M16 19h6" />
                    <path d="M19 16v6" />
                </svg>
                <p>Añadir Canción</p>
            </NavLink>
            <NavLink to= "/playlists" className= {({isActive}) => isActive? `${styles.menuOption} ${styles.active}` :styles.menuOption}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="42"  height="42"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                    <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M17 17v-13h4" />
                    <path d="M13 5h-10" />
                    <path d="M3 9l10 0" />
                    <path d="M9 13h-6" />
                </svg>
                <p>Playlists</p>
            </NavLink>
            <NavLink to= "/create" className= {({isActive}) => isActive? `${styles.menuOption} ${styles.active}` :styles.menuOption}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="42"  height="42"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                    <path d="M19 8h-14" />
                    <path d="M5 12h9" />
                    <path d="M11 16h-6" />
                    <path d="M15 16h6" />
                    <path d="M18 13v6" />
                </svg>
                <p>Crear Playlist</p>
            </NavLink>
        </nav>
    )
};

export default Navbar