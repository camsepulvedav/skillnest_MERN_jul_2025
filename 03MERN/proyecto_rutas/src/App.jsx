// import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router"
// import axios from "axios"
import './App.css'
import MyEndpoint from "./components/MyEndpoint/MyEndpoint"

function App() {


  return (
    <>
      {/* <header>
        <p>Hola {name}!</p>
        <button>Cerrar sesión</button>
      </header>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="inicio" element={}></Route>
            <Route path="product/:name" element={}></Route>
          </Route>

          <Route path="*" element={<p>Página no encontrada 💔</p>}></Route>

        </Routes>
      </BrowserRouter> */}
      <MyEndpoint/>
    </>
  )
}

export default App
