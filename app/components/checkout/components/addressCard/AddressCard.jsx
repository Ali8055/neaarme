import React from "react";

function AddressCard() {
  return (
    <div className=" bg-[rgba(24,57,106,0.25)] rounded-lg p-5 shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] ">
      <p className="text-sm my-1">Deliver to : Test</p>
      <div className="text-sm gap-3 flex ">
        <p>Home</p>
        <p>09384984</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex
          possimus voluptatum error minus eaque
        </p>
      </div>
      <div className="text-sm mt-1">
        Bill to the same address{" "}
        <span className="text-[#52b9c5] cursor-pointer hover:underline px-2">
          Edit
        </span>
      </div>
      <div className="text-sm mt-1">
        Email to test@gmail.com{" "}
        <span className="text-[#52b9c5] cursor-pointer hover:underline px-2">
          Edit
        </span>
      </div>
    </div>
  );
}

export default AddressCard;
