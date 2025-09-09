import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'
import List from './components/List/List'

function App() {
  const [notes, setNotes] = useState ([]);
  const [filter, setFilter] =useState ("")

  const addNote = (noteText, priority) => {
    const newNote = {
      // id: ,
      text: noteText,
      priority: priority,
    }
    setNotes([...notes, newNote])
  }

  const filteredNotes = notes.filter(note => {
    if (filter === "") return true 
    return note.priority === filter
  })
  

  return (
      <div className='mainContainer'>
        <h1>Mis notas ({notes.length})</h1>
        {/*Componente para agregar notas */}
        <Form onAddNote = {addNote}/>
        <hr/>
        {/*Componente para filtrar */}
        <Filter currentFilter={filter} onFilterChange={setFilter}/>
        {/*Componente para mostrar lista*/}
        <List notes={filteredNotes}/>
      </div>
  )
}

export default App
