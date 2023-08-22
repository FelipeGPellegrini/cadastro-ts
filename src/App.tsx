import React, { useState } from 'react';
import "./App.css"

interface Contact {
  name: string;
  email: string;
}

function App() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = () => {
    if (name && email) {
      const newContact: Contact = { name, email };
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h1>Contacts</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>
      <div className='containerList'>
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              Name: {contact.name} | Email: {contact.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;