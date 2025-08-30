import styles from './TarjetaProducto.module.css'
import { useState } from 'react'

const TarjetaProducto = ({producto}) => {
  const [contador, setContador] = useState(producto.stock)
console.log(contador)
console.log(setContador)

  return (
    <div className={`${styles.contenedorTarjeta}`}>
        <h3>{producto.nombreProducto}</h3>
        <p style={{color:"gray"}}>{producto.precio}</p>
        <p>{producto.descripcion}</p>
        {
        producto.enStock && contador>0 ? <p style={{fontWeight:"bold", color:"#2AA751", }}>En Stock: {contador}</p> :
        <p style={{fontWeight:"bold", color:"#DC394A"}}>Agotado</p>
        }
        <button disabled={contador<=0} onClick={()=>{setContador(contador-1)}}>Comprar</button>
    </div>
  )
}

export default TarjetaProducto