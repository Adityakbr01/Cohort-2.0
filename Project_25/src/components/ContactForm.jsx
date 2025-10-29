import { useEffect, useRef, useState, useMemo } from "react";
import { useContacts } from "../context/ContactContext";
import { useFormValidation } from "../hooks/useFormValidation";

const ContactForm = () => {
  const { addContact } = useContacts();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const { errors, validate } = useFormValidation(formData);
  const nameRef = useRef();

  // Focus on name input when form loads
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const isFormFilled = useMemo(() => {
    return formData.name && formData.phone && formData.email;
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(formData)) return;
    addContact(formData);
    setFormData({ name: "", phone: "", email: "" });
    nameRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Add New Contact
      </h2>

      <div className="mb-3">
        <input
          ref={nameRef}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <button
        type="submit"
        disabled={!isFormFilled}
        className={`w-full py-2 rounded-md font-semibold text-white transition-all ${
          isFormFilled
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
