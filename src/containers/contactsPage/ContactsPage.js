import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.contacts.find(contact => contact.name === name) !== undefined) {
      alert(`The name ${name} is already been used. Please change the name to create a new contact.`);
      return null;
    };
    props.addContact(name, phone, email);
  };

  useEffect(() => {
    if (props.contacts.find(contact => contact.name === name) !== undefined) {
      alert(`The name ${name} is already been used.`);
    };
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={props.contacts} />
      </section>
    </div>
  );
};
