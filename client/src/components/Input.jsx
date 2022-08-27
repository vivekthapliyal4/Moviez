import React from "react";

const Input = ({ name, placeholder, type, className, handleChange }) => {
  return (
    <input
      className={`px-4 py-2 w-full outline-none rounded-md text-white bg-zinc-800 focus:ring-2 focus:ring-slate-400 ${className}`}
      name={name}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
