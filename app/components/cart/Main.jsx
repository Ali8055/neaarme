"use client";
import { Icon } from "@iconify/react";
import React from "react";
import CartCard from "./components/cartCard/CartCard";
import OrderSummary from "../common/orderSummary/OrderSummary";

function Main() {
  const cartData = [
    {
      sellerName: "Mak & Mok ",
      location: "Lahore",
      productName: "Watch",
      productPic: "/watch.jpg",
      salePrice: " 1000",
      brand: "No Brand",
      color: " Black",
      verified: "NearMe Verified",
      originalPrice: "7000",
      offPercentage: "70%",
      totalItems: "9",
    },
    {
      sellerName: "Mak & Mok ",
      location: "Lahore",
      productName: "Watch",
      productPic: "/watch.jpg",
      salePrice: " 1000",
      brand: "No Brand",
      color: " Black",
      verified: "NearMe Verified",
      originalPrice: "7000",
      offPercentage: "70%",
      totalItems: "9",
    },
    {
      sellerName: "Mak & Mok ",
      location: "Lahore",
      productName: "Watch",
      productPic: "/watch.jpg",
      salePrice: " 1000",
      brand: "No Brand",
      color: " Black",
      verified: "NearMe Verified",
      originalPrice: "7000",
      offPercentage: "70%",
      totalItems: "9",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 my-10 text-white">
      <div className="col-span-3 ">
        <div className="bg-[rgba(24,57,106,0.25)] rounded-lg p-3 shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="h-5 w-5" />
            <p>
              SELECT ALL <span>(48 ITEM(S))</span>
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#52b9c5]">
            <Icon icon="solar:trash-bin-trash-bold" className="text-lg" />
            <p>DELETE</p>
          </div>
        </div>
        {cartData.map((val, index) => (
          <CartCard data={val} key={index} />
        ))}
      </div>
      <div className="col-span-2 ">
        <OrderSummary text="proceed Checkout (1)" link="/checkout" />
      </div>
    </div>
  );
}

export default Main;
