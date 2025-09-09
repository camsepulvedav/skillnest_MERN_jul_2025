import './App.css'
import SuperForm from './components/SuperForm/SuperForm'
// import SuperList from './components/SuperList/SuperList'

function App() {
  return (
    <div className='mainContainer'>
        <h1>Bienvenido a la Liga de Superhéroes</h1>
        <SuperForm/>
        {/* <SuperList/> */}
        <figure className='heroine'>
          <img src="/assets/img/female_hero.svg" alt="Ilustración plana a color de superheroína corriendo" />
        </figure>
        <figure className='hero'>
          <img src="/assets/img/male_hero.svg" alt="Ilustración plana a color de superhéroe de pie en pose de poder" />
        </figure>
    </div>
  )
}

export default App