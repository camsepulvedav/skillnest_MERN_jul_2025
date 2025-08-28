import './App.css'
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main/Main"
import Side from "./components/Side/Side"

const App = () =>{

  //Lógica
 

  //HTML  
  return (
    <div className ="mainContainer">
      {/* <h1>¡Bienvenido a mi aplicación de React!</h1>
      <h2>Lista de cosas por hacer:</h2>
      <ul>
        <li>Aprender React</li>
        <li>Practicar con Vite</li>
        <li>Construir proyectos increíbles</li>
      </ul> */}
      <NavBar/>
      <div className="subContainer">
        <Main/>
        <Side/>
      </div>
        
    </div>
  )
}

export default App
