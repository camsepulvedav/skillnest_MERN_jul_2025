import {BrowserRouter, Routes, Route} from "react-router"
import './App.css'
import Home from "./pages/Home/Home"
import ArtDetail from "./pages/ArtDetail/ArtDetail"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/art/:id" element={<ArtDetail/>}/>
          <Route path="*" element={<p>Página no encontrada 😢💔</p>}/>
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
