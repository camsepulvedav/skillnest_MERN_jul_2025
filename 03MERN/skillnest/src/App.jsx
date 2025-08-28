import './App.css'
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main/Main"
import Side from "./components/Side/Side"

const App = () =>{

  //Lógica
 

  //HTML  
  return (
    <div className ="mainContainer">
      <NavBar/>
      <div className="subContainer">
        <Main/>
        <Side/>
      </div>
    </div>
  )
}

export default App
