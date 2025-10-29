import { useContacts } from "../context/ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts } = useContacts();

  if (contacts.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No contacts yet.</p>;
  }

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.map((c, i) => (
        <ContactCard key={i} contact={c} />
      ))}
    </div>
  );
};

export default ContactList;
