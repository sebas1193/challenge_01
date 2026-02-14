import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface Props {
  contacts: Contact[];
  onAdd: (name: string, phone: string) => void;
  onDelete: (id: number) => void;
}

function ListContacts({ contacts, onAdd, onDelete }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = () => {
    if (name === "" || phone === "") return;

    onAdd(name, phone);
    setName("");
    setPhone("");
  };

  return (
    <div>
      <h2>Lista de Contactos</h2>

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
            <button onClick={() => onDelete(contact.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListContacts;
