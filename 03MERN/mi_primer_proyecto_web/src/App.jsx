// eslint-disable-next-line no-unused-vars
import form from "./components/form"
import './App.css'

function App =()=> {
  const estudiantes = [
    {nombre: ""},
  ]

  const title = "Título del formulario pasado x props"
  return (
    <>
    <Form title = {title}/>
    <h1>Hello world~!</h1>
    </>
  )
}

export default App
