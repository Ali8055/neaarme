import React from "react";

function SelectBar({ handleSelect, show, heading }) {
  return (
    <div className="mt-3 flex gap-8 border-b cursor-pointer">
      {heading.map((val) => (
        <p
          className={`${show == val ? "text-[#52b9c5]" : "text-white"}`}
          onClick={() => handleSelect(val)}>
          {val}
        </p>
      ))}
    </div>
  );
}

export default SelectBar;
