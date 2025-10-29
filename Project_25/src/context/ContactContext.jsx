import { useState, useCallback } from "react";
import { ContactContext } from "./useContacts";

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = useCallback((contact) => {
    setContacts((prev) => [...prev, contact]);
  }, []);

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
