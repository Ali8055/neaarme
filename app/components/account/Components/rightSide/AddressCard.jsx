import React from "react";

function AddressCard({ val }) {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 w-[33%] rounded-lg">
      <div className="flex justify-between">
        <p>{val.label}</p>
        <p className="cursor-pointer underline text-sm">{val.button}</p>
      </div>
      <div className="text-sm my-2">
        <p className="text-white/80">{val.default}</p>
        <p className="capitalize mt-1 text-base">{val.name}</p>
        <p className="mt-2">{val.address}</p>
        <p className="capitalize mb-2">{val.location}</p>
        <p>{val.number}</p>
      </div>
    </div>
  );
}

export default AddressCard;
