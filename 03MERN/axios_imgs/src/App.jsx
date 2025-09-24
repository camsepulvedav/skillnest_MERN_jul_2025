import axios from "axios"
import {useEffect, useState} from "react"
import './App.css'
import ImageDisplay from "./components/ImageDisplay"

function App() {
  const [currentImg, setCurrentImg] = useState(null);
  const [loading, setLoading] = useState (false);

  const Pexels_Api_Key = "Bqj8Miy1KqcQvhEqExPaJI2nobO9dm0sC14dq9Q6ziUEIoNKa2odkKEi";

  useEffect (() => {
    getRandomImg();
  }, [])

  const getRandomImg = async () => {
    setLoading(true);
    try {
      const randomPage = Math.floor(Math.random() *100) +1;

      const result = await axios.get(
         `https://api.pexels.com/v1/curated?per_page=1&page=${randomPage}`,
        {
          headers: {
            Authorization: Pexels_Api_Key
          }
        }
      );

      if (result.data.photos && result.data.photos.length > 0) {
        setCurrentImg(result.data.photos[0]);
      }
    } catch(error) {
      console.error("Error al obtener imagen", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="mainContainer"> 
      <h1>Una 📸 al azar</h1>
      <ImageDisplay image={currentImg} loading={loading}/>
      <button onClick={getRandomImg} disabled={loading}>
        {loading? "Cargando...": "¡Quiero una imagen nueva!"}
      </button>
      <div id="credits">
        <p>Fotos obtenidas desde</p>
        <a href="https://www.pexels.com">
        <img src="https://images.pexels.com/lib/api/pexels.png" alt="Pexels logo in black"/>
        </a>
      </div>
    </div>
  )
}

export default App
