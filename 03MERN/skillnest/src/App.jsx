import './App.css'
import TopNav from "./components/TopNav/TopNav"
import Main from "./components/Main/Main"
import SideNav from "./components/SideNav/SideNav"

const App = () =>{

  //Acá va la lógica, si es que aplica

  //Después del return, se escribe el HTML necesario  
  return (
    <div className ="mainContainer">
      <TopNav/>
      <div className="subContainer">
        <Main/>
        <SideNav/>
      </div>
    </div>
  )
}

export default App
