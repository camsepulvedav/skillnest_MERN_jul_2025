import {BrowserRouter, Routes, Route} from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import AddSong from "./pages/AddSong/AddSong"
import Playlists from "./pages/Playlists/Playlists"
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist"
import SongDetails from "./pages/SongDetails/SongDetails"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddSong/>}/>
          <Route path="/playlists" element={<Playlists/>}/>
          <Route path="/create" element={<CreatePlaylist/>}/>
          <Route path="/canciones/:id" element={<SongDetails/>}/>
          <Route path="*" element={<p>Página no encontrada 😢💔</p>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
