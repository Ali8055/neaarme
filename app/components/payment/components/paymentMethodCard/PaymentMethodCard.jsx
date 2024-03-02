"use client";
import { Icon } from "@iconify/react";
import React from "react";

function PaymentMethodCard({ data }) {
  return (
    <div className="bg-[rgba(24,57,106,0.25)] rounded-lg  shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)]  p-2 h-36 w-36 text-center flex justify-center items-center flex-col cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ">
      <Icon icon={data.image} className="text-[3.5rem]" />
      <p className="text-sm pt-2">{data.name}</p>
    </div>
  );
}

export default PaymentMethodCard;
