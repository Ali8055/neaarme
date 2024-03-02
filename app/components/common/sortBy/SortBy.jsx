import React from "react";

function SortBy({ sorting }) {
  return (
    <div className="flex  items-center gap-3 ">
      <p>Sort by </p>
      <select className="p-2 rounded-lg focus:outline-none cursor-pointer bg-transparent border border-white">
        <option disabled className="p-1 text-black ">
          Best Match
        </option>
        {sorting?.map((val) => (
          <option className=" text-black">{val}</option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;
