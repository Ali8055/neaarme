import { Icon } from "@iconify/react";
import React, { useState } from "react";

function Dropdown({ country, label }) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (val) => {
    setSelectedOption(val);
    setIsOpen(false);
  };
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        data-dropdown-toggle="dropdown"
        className="text-white relative bg-[#52b9c5]   focus:outline-none text-sm   rounded-lg  px-3 py-2 text-center inline-flex items-center"
        type="button">
        {selectedOption}
        <Icon icon="oui:arrow-down" className="text-lg ms-2" />
      </button>
      <div
        id="dropdown"
        className={`z-10 absolute mt-3 w-[186px] bg-[rgba(24,57,106,0.8)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] ${
          isOpen ? "" : "hidden"
        } text-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}>
        <ul
          className="py-2 text-sm  dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton">
          {country.map((val, index) => (
            <li
              className="cursor-pointer"
              key={index}
              onClick={() => handleOptionClick(val)}>
              <p className="block px-3 py-1 hover:bg-[#52b9c5] dark:hover:bg-gray-600 dark:hover:text-white">
                {val}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
