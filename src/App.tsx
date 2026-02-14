import { useEffect, useState } from "react";
import Loader from "../components/loader";
import ListContacts from "../components/list_contacts";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  // Simular carga inicial
  useEffect(() => {
    setTimeout(() => {
      const initialContacts: Contact[] = [
        { id: 1, name: "Juan", phone: "123456" },
        { id: 2, name: "Maria", phone: "987654" }
      ];

      setContacts(initialContacts);
      setLoading(false);
    }, 2000);
  }, []);

  const addContact = (name: string, phone: string) => {
    const newContact: Contact = {
      id: Date.now(),
      name,
      phone
    };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id: number) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== id
    );

    setContacts(updatedContacts);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Challenge 01</h1>
      <ListContacts
        contacts={contacts}
        onAdd={addContact}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
