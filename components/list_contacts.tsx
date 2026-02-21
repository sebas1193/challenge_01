import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

function ListContacts() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Juan", phone: "123456" },
    { id: 2, name: "Maria", phone: "987654" },
  ]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = () => {
    if (name === "" || phone === "") return;

    const newContact: Contact = {
      id: Date.now(),
      name: name,
      phone: phone,
    };

    setContacts([...contacts, newContact]);
    setName("");
    setPhone("");
  };

  const handleDelete = (id: number) => {
    const updated = contacts.filter((contact) => contact.id !== id);
    setContacts(updated);
  };

  return (
    <div>
      <h2>Lista de Contactos</h2>

      <img src="/img1.png" alt="imagen principal" width={200} />

      <br />

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => handleDelete(contact.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListContacts;