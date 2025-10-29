import { useState } from "react";

export const useFormValidation = (initialState) => {
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(values.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!values.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Invalid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
};
