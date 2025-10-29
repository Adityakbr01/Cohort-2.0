const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start border-l-4 border-blue-500">
      <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
      <p className="text-gray-600">{contact.phone}</p>
      <p className="text-gray-500">{contact.email}</p>
    </div>
  );
};

export default ContactCard;
