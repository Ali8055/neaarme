import React from "react";

function ProductOrderCard() {
  return (
    <div className="bg-[rgba(24,57,106,0.25)] rounded-lg p-5 shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] my-4 ">
      <div className="mb-3">
        <p className="capitalize">
          MAK & MAK <span>(Lahore)</span>
        </p>
      </div>
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-2  flex items-center gap-3">
          <img
            src="/watch.jpg"
            alt="picture"
            className="h-20 w-20 rounded-lg"
          />
          <div className="span">
            {" "}
            <p className="capitalize text-xl">Watch</p>
            <p className="capitalize text-sm py-1 text-white/80">
              No Brand, color Family: Black
            </p>
            <p className="capitalize text-sm text-white/80 pb-1">
              only 9 item(s) left in stock
            </p>
            <p className="capitalize text-sm text-orange-400">
              NearMe Verified
            </p>
          </div>
        </div>
        <div className="col-span-1">Qty: 1</div>
        <div className="col-span-1">
          <div className="flex items-center gap-3">
            <del className="text-xs">Rs. 999</del>
            <p className="text-xs">-45%</p>
            <p>Rs. 545</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOrderCard;
