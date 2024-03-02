import React from "react";

function SoldBy() {
  return (
    <div className="text-white mt-1">
      <h1 className=" text-sm ">Sold By</h1>
      <div className="flex justify-between items-center">
        <p className="capitalize">Excel Shopping Centre</p>
        <p className="border border-[#3aa4a454] px-3 cursor-pointer">Chat</p>
      </div>
      <div className="mt-2 grid grid-cols-3 bg-[#3aa4a454] p-2">
        <div>
          <p className="text-xs text-center">Positive Seller Ratings</p>
          <p className="text-center text-2xl pt-2">87%</p>
        </div>
        <div>
          <p className="text-xs text-center">Shipment On Time Rate</p>
          <p className="text-center text-2xl pt-2">87%</p>
        </div>
        <div>
          <p className="text-xs text-center">Chat Response Rateee</p>
          <p className="text-center text-2xl pt-2">100%</p>
        </div>
      </div>
    </div>
  );
}

export default SoldBy;
