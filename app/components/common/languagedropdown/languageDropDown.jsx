import { Icon } from "@iconify/react";
import React, { useState } from "react";

function LanguageDropDown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="bg-[#52b9c5] text-white px-3 py-2 rounded-md flex items-center gap-2 focus:outline-none">
        <Icon icon="clarity:world-solid" className="text-[1.5rem]" />
        <p>EN</p>
      </button>
      {isDropdownOpen && (
        <ul className="absolute mt-2 bg-white border border-gray-300 shadow-md rounded-md w-40 text-sm">
          <p className="px-4 pt-2">Select Language : </p>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <input type="radio" name="language" />
            <p>EN / English</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <input type="radio" name="language" />
            <p>UR / Urdu</p>
          </div>
        </ul>
      )}
    </div>
  );
}

export default LanguageDropDown;
