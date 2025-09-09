import { useState } from "react"
import "./Form.module.css"

const Form = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [user, setUser] = useState("");
    const [terminos, setTerminos] = useState(false);

    const [isError, setIsError] = useState (false);

const register = () => {
    if (name =="" || mail =="" || password =="" || passwordConfirm =="" || user ==false || terminos ==false) {
        setIsError (true);
    } else {
        setIsError (false);
    }
}    

const clean =() => {
    setName("");
    setMail("");
    setPassword("");
    setPasswordConfirm("");
    setUser("");
    setTerminos(false);
    setIsError(false);
}

    return (
        <div>
        <label htmlFor="name">Nombre: </label>
        <input type="text" 
            name="name" id="name" 
            placeholder="Nombre" 
            onChange={event => setName(event.target.value)} 
            value={name}/>
        <br/>
        <label htmlFor="mail">Correo: </label>
        <input type="email" 
            name="mail" id="mail" 
            placeholder="correo@mimail.com" 
            onChange={event => setMail(event.target.value)} 
            value={mail}/>
        <br/>
        <label htmlFor="password">Contraseña: </label>
        <input type="password" 
            name="password" 
            id="password" 
            placeholder="Ingresa tu contraseña" 
            onChange={event => setPassword(event.target.value)} 
            value={password}/>
        <br/>
        <label htmlFor="password">Repite tu contraseña: </label>
        <input type="password" 
            name="passwordConfirm" 
            id="passwordConfirm" 
            placeholder="Repite tu contraseña" 
            onChange={event => setPasswordConfirm(event.target.value)} 
            value={passwordConfirm}/>
        <br/>
        {passwordConfirm !== password && <p>Las contraseñas ingresadas NO son iguales</p>}
        <input type="radio" 
            name="user" 
            value="ADMIN" 
            onChange={event => setUser(event.target.value)}
            checked={user == "ADMIN"}/> ADMIN
        <input type="radio" 
            name="user" 
            value="SIMPLE" 
            onChange={event => setUser(event.target.value)}
            checked={user == "SIMPLE"}/> SIMPLE
        <br/>
        <input type="checkbox" 
            onChange={event => setTerminos (event.target.checked)} 
            checked={terminos}/>
        <label htmlFor="">He leído los términos y condiciones</label>
        <br/>
        <button onClick={register}>Registrar</button>
        <button onClick={clean}>Limpiar</button>
        <br/>
        {isError && <p style= {{color: "red"}}>Falta algún dato :(</p>}
        </div>
    )
}

export default Form