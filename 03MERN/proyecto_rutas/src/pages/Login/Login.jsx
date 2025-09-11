import { useNavigate } from "react-router"

const Login = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate ("/dashboard", 
            
        );
}

 return (
    <>
        <label htmlFor="user">Usuario: </label>
        <input type="text" placeholder="Nombre, email o número registrado"/>
        <br/>
        <label htmlFor="password"></label>
        <input type="password" placeholder="Escribe tu contraseña" />
        <br/>
        <button onClick={goTo}>Iniciar sesión</button>
    </>
 )
}

export default Login