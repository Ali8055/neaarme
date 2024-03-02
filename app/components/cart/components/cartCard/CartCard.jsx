import DecQTY from "@/app/components/common/inc/decQTY/Inc/DecQTY";
import { Icon } from "@iconify/react";
import React from "react";

function CartCard({ data }) {
  return (
    <div className="bg-[rgba(24,57,106,0.25)] rounded-lg p-3 shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)]  my-5 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="h-5 w-5" />
        <p className="capitalize">
          {data.sellerName} <span>({data.location})</span>
        </p>
      </div>
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-2  flex items-center gap-3">
          <img
            src={data.productPic}
            alt="picture"
            className="h-20 w-20 rounded-lg"
          />
          <div className="span">
            {" "}
            <p className="capitalize text-xl">{data.productName}</p>
            <p className="capitalize text-sm py-1 text-white/80">
              {data.brand}, color Family: {data.color}
            </p>
            <p className="capitalize text-sm text-white/80 pb-1">
              only {data.totalItems} item(s) left in stock
            </p>
            <p className="capitalize text-sm text-orange-400">
              {data.verified}
            </p>
          </div>
        </div>
        <div className="col-span-1 ">
          <p className="text-lg text-orange-300">Rs. {data.salePrice}</p>
          <del className="text-sm text-white/70">Rs. {data.originalPrice}</del>
          <p className="text-sm text-white">-{data.offPercentage}</p>
          <div className="flex items-center text-2xl gap-1 mt-2">
            <Icon
              icon="mdi:heart-outline"
              className="cursor-pointer hover:text-[#52b9c5]"
            />
            <Icon
              icon="solar:trash-bin-trash-bold"
              className="cursor-pointer hover:text-[#52b9c5]"
            />
          </div>
        </div>
        <div className="col-span-1 ">
          <DecQTY />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
