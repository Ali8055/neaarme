import React from "react";

function SubList({ val, onCardClick, selectedCard }) {
  return (
    <div className="my-5">
      <p
        className={` cursor-pointer hover:underline ${
          selectedCard == val.heading ? "text-[#89ecf8]" : "text-white"
        }`}
        onClick={() => onCardClick(val.heading)}>
        {val.heading}
      </p>
      <div>
        {val.list.map((val, index) => (
          <p
            key={index}
            onClick={() => onCardClick(val)}
            className={`cursor-pointer hover:underline ${
              selectedCard == val ? "text-[#89ecf8]" : "text-white"
            }`}>
            {val}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SubList;
