import { useState } from 'react';
import './App.css'
import ContactCard from './components/ContactCard/ContactCard'

function App() {
  const [newContact, setNewContact] = useState("");
  const [contacts, setContacts] = useState( [] );
  
  const addNewContact = () => {
    let contactsTemp = [...contacts];
    contactsTemp.push({
      name: newContact,
      phone: "000000000"
    });
    setContacts(contactsTemp);
  }
  const remove = (index) => {
    let contactsTemp = [...contacts];
    contactsTemp.splice(index, 1);
    setContacts(contactsTemp);
  }
  const edit = (index) => {
    let contactsTemp = [...contacts];
    contactsTemp[index].name = newContact;
    setContacts(contactsTemp);
  }

  return (
    <>
      <div className="mainContainer">
        <h1>Mis Contactos</h1>
        <header>
          <input type="text" name="newContact" placeholder="Datos del nuevo contacto" onChange={(e)=> setNewContact (e.target.value)}/>
          <button onClick={addNewContact}>Agregar</button>
        </header>
        {
          contacts.map( (value, index) => {
            return <ContactCard name={value.name} 
                                phone={value.phone}
                                onRemove={() => remove(index)}
                                onEdit={() => edit(index)}/>
          })
        }
      </div>
    </>
  )
}

export default App
