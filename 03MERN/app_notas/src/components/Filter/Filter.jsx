import styles from "./Filter.module.css"

const Filter = ({currentFilter, onFilterChange}) => {
    return (
        <div className={styles.selectGrid}>
            <label htmlFor="showFiltered">Mostrar: </label>
            <select className={styles.select}
                    name="filter" 
                    value={currentFilter}
                    onChange={(e)=> onFilterChange(e.target.value)}>
                <option value="">Todas</option>
                <option value="Baja">Prioridad baja</option>
                <option value="Media">Prioridad media</option>
                <option value="Alta">Prioridad alta</option>
            </select>
        </div>
)
}
export default Filter