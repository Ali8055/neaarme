import React from "react";

function TextField({ placeholder, type, name, id }) {
  return (
    <div className="mt-2">
      <input
        id={id}
        name={name}
        type={type}
        // autocomplete="current-password"
        placeholder={placeholder}
        required
        className="block w-full px-4 rounded-md border py-1.5 bg-transparent border-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 focus:outline-none"
      />
    </div>
  );
}

export default TextField;
