import { Icon } from "@iconify/react";
import React from "react";

function Delivery() {
  return (
    <div className="text-white">
      <h1 className="my-3 text-sm">Delivery</h1>
      <div className="flex items-center gap-2">
        <Icon icon="akar-icons:location" className="text-xl" />
        <p className="capitalize">Sindh, Karachi Gulshan-Iqbal</p>
      </div>
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
      <div className="flex  gap-2">
        <Icon icon="tabler:truck-delivery" className="text-xl" />
        <h2>
          Free Delivery{" "}
          <span className="text-xs px-2 text-orange-300">25 Feb - 3 Mar</span>{" "}
          <br /> <span className="text-xs text-orange-300 ">4 - 11 days</span>
        </h2>
      </div>
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
      <div className="flex gap-2 items-center">
        <Icon icon="mdi:cash-on-delivery" className="text-xl" />
        <p className="capitalize">cash on delivery</p>
      </div>
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
    </div>
  );
}

export default Delivery;
