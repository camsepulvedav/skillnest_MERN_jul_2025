import './App.css'
import TarjetaProducto from './components/TarjetaProducto/TarjetaProducto'
import arrayObj from './components/TarjetaProducto/arrayObj'

function App() {  

  return (
    <>
    <h1>TechStore - Tu Destino para la Mejor Tecnología</h1>
    <div className='mainContainer'>
      {
        arrayObj.map((producto)=>(
          <TarjetaProducto producto={producto}/>
        ))
      }
    </div>
    </>
  )
}

export default App
