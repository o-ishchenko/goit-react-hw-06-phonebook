import React from 'react';
import s from './App.module.css';
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';


function App() {
    return (
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <Form />
        <h2 className={s.title}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );
  }


export default App;
