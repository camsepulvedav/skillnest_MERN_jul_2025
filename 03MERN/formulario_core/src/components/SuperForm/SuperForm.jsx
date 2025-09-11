import { useState } from "react"
import styles from "./SuperForm.module.css"
// import Toast from "./components/ui/Toast";

const SuperForm = () => {
  const [data,setData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (field, value) => {
    setData({...data, [field]: value})
  }

  const handleSubmit = () => {
    // Acá debería ir el traspaso de datos a la lista?
    //Tendría que validar antes de enviar, al menos en principio...
    alert("🦸‍♂️¡Felicidades! Tu membresía ha sido aprobada por el Consejo de la Liga.🦸‍♀️");
    setData ({
      firstName: "",
      lastName: "",
      mail: "",
      password: "",
      confirmPassword: ""
    })
  }

  return (
    <>
    <h2 className={styles.title}>¡Regístrate y forma parte de La Liga!</h2>
    <div className={styles.formContainer}>
      {/*Nombre*/}
        <label className={styles.label} 
                htmlFor="firstName">Nombre: </label>
        <input className={styles.input}
                type="text" 
                id= "firstName"
                placeholder="Nombre heroico"
                value= {data.firstName}
                onChange= {(e) => handleChange("firstName", e.target.value)}/>
        {data.firstName && data.firstName.length < 4 && (
          <p style={{color:"#c1121f", fontWeight: "400"}}>El nombre debe tener AL MENOS 4 caracteres</p>
        )}
        {/*Apellido*/}
        <label className={styles.label} 
                htmlFor="lastName">Apellido: </label>
        <input className={styles.input} 
                type="text"
                id="lastName" 
                placeholder="Apellido poderoso"
                value={data.lastName}
                onChange= {(e) => handleChange("lastName", e.target.value)}/>
        {data.lastName && data.lastName.length < 4 && (
          <p style={{color:"#c1121f", fontWeight: "400"}}>El apellido debe tener AL MENOS 4 caracteres</p>
        )}
        {/*Correo*/}        
        <label className={styles.label} 
                htmlFor="mail" >Correo electrónico: </label>
        <input className={styles.input}
                type="email"
                id="mail" 
                placeholder="nombre@supermail.com"
                value={data.mail}
                onChange= {(e) => handleChange("mail", e.target.value)}/>
        {data.mail && data.mail.length < 10 && (
          <p style={{color:"#c1121f", fontWeight: "400"}}>El mail debe tener AL MENOS 10 caracteres</p>
        )}
        {data.mail && data.mail.length >= 10 && !data.mail.includes("@") && (
          <p style={{color:"#c1121f", fontWeight: "400"}}>El mail DEBE TENER @</p>
          )}
        {/*Contraseña*/}                
        <label className={styles.label} 
                htmlFor="password">Contraseña: </label>
        <input className={styles.input} 
                type="password" 
                id="password"
                placeholder="Crea tu contraseña"
                value={data.password}
                onChange= {(e) => handleChange("password", e.target.value)}/>
        {data.password && data.password.length < 12 && (
          <p style={{color:"#c1121f", fontWeight: "400"}}>La contraseña debe tener AL MENOS 12 caracteres</p>
        )}
        {/*Confirmar contraseña*/}        
        <label className={styles.label} 
                htmlFor="confirmPassword">Confirmar contraseña: </label>
        <input className={styles.input} 
                type="password"
                id="confirmPassword"
                placeholder="Repite tu contraseña"
                value={data.confirmPassword}
                onChange= {(e) => handleChange("confirmPassword", e.target.value)}/>
        {data.confirmPassword && data.confirmPassword.length < 12 && ( 
          <p style={{color:"#c1121f", fontWeight: "400"}}>La contraseña debe tener AL MENOS 12 caracteres</p>
        )}
        {data.confirmPassword && data.confirmPassword.length >= 12 && data.confirmPassword !== data.password && (
          <p style={{color:"#c1121f", fontWeight: "400"}}>Las contraseñas NO coinciden</p>
        )}
        {/*Botón*/}
      <button className={styles.button} onClick={handleSubmit}>Crear cuenta</button>
    </div>
    </>
  )
}

export default SuperForm