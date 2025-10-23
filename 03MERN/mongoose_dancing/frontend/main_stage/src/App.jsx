import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Register/Register"
import Layout from "./Layout/Layout"
import Home from "./pages/Songs/Home/Home"
import AddSong from "./pages/Songs/AddSong/AddSong"
import SongDetails from "./pages/Songs/SongDetails/SongDetails"
import EditSong from "./pages/Songs/EditSong/EditSong"
import Playlists from "./pages/Playlist/Playlists/Playlists"
import CreatePlaylist from "./pages/Playlist/CreatePlaylist/CreatePlaylist"
import PlaylistDetails from "./pages/Playlist/PlaylistDetails/PlaylistDetails"
import EditPlaylist from "./pages/Playlist/EditPlaylist/EditPlaylist"


function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/agregar" element={<AddSong/>}/>
          <Route path="/canciones/:id" element={<SongDetails/>}/>
          <Route path="/canciones/editar/:id" element={<EditSong/>}/>
          <Route path="/playlists" element={<Playlists/>}/>
          <Route path="/playlists/crear" element={<CreatePlaylist/>}/>
          <Route path="/playlists/:id" element={<PlaylistDetails/>}/>
          <Route path="/playlists/editar/:id" element={<EditPlaylist/>}/>
          <Route path="*" element={<p>Página no encontrada 😢💔</p>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
