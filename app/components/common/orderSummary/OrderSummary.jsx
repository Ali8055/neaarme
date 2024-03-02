import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function OrderSummary({ text, name, link }) {
  return (
    <div className="bg-[rgba(24,57,106,0.25)] rounded-lg  shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)]  p-5">
      <h1 className="text-lg">Order Summary</h1>
      <p className="my-1 text-md text-white/80">Subtotal (0 Items)</p>
      <div className=" text-lg  my-1 flex items-center justify-between">
        <p>Delivery Fee</p>
        <p className="text-orange-300">Rs. 0</p>
      </div>
      <div className=" text-lg  my-1 flex items-center justify-between">
        <p>Total</p>
        <p className="text-orange-300">Rs. 0</p>
      </div>
      {name == "Payment" ? (
        ""
      ) : (
        <Link href={link}>
          <div className="relative mt-3 cursor-pointer w-full inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white hover:border-2 hover:border-[#52b9c5] rounded-lg shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full hover:border-2 hover:border-[#52b9c5] bg-[#52b9c5] group-hover:translate-x-0 ease">
              <Icon icon="lucide:arrow-right" className="text-2xl" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              {text}
            </span>
            <span className="relative invisible">{text}</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default OrderSummary;
