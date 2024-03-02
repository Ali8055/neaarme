"use client";
import React from "react";
import SelectBar from "./SelectBar";
import { Icon } from "@iconify/react";
import ProductOrderCard from "@/app/components/checkout/components/productOrderCard/ProductOrderCard";

function MyWishListFollowedStore({ show, handleSelect }) {
  const heading = ["My Wishlist", "Followed Stores"];
  return (
    <div>
      <p className="text-xl ">My Wishlist & Followed Stores</p>
      <SelectBar show={show} handleSelect={handleSelect} heading={heading} />
      {show == "My Wishlist" && <ProductOrderCard />}
      {show == "Followed Stores" && (
        <div className="my-5 flex justify-between items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6  rounded-lg ">
          <div className="flex items-center gap-4">
            <img
              src="/watch.jpg"
              alt="picture"
              className="h-20 w-20 rounded-lg"
            />
            <p className="capitalize">Sports hub (karachi)</p>
          </div>
          <div className="flex gap-2">
            <p className="flex items-center gap-2">
              <Icon icon="charm:tick-double" className="text-2xl" />
              <span>Following</span>
            </p>
            <p className="underline text-[#89ecf8] cursor-pointer">Visit</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyWishListFollowedStore;
