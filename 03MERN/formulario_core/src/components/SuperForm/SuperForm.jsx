import styles from "./SuperForm.module.css"

const SuperForm = () => {
  return (
    <>
    <h2 className={styles.title}>¡Regístrate y forma parte de La Liga!</h2>
    <div className={styles.formContainer}>
        <label htmlFor="firstName" className={styles.label}>Nombre: </label>
        <input type="text" className={styles.input} placeholder="Nombre heroico"/>
        <label htmlFor="lastName" className={styles.label}>Apellido: </label>
        <input type="text" className={styles.input} placeholder="Apellido poderoso"/>
        <label htmlFor="mail" className={styles.label}>Correo electrónico: </label>
        <input type="email" className={styles.input} placeholder="nombre@supermail.com"/>
        <label htmlFor="password" className={styles.label}>Contraseña: </label>
        <input type="password" className={styles.input} placeholder="Crea tu contraseña"/>
        <label htmlFor="confirmPassword" className={styles.label}>Confirmar contraseña: </label>
        <input type="password" className={styles.input} placeholder="Repite tu contraseña"/>
      <button className={styles.button}>Crear cuenta</button>
    </div>
    </>
  )
}

export default SuperForm