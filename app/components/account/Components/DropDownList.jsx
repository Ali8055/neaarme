"use client";
import Link from "next/link";
import React, { useState } from "react";

function DropDownList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (productName) => {
    setSelectedProduct(productName);
  };

  const list = [
    "Manage My Account",
    "My Orders",
    "My Wishlist & Followed Stores",
    "My Reviews",
    "My Returns & Cancellation",
  ];
  return (
    // <div class="mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20">
    <div class="group relative cursor-pointer  w-full text-sm rounded-lg border border-[#52b9c5]">
      <div class="flex items-center justify-between space-x-2  hover:bg-[#52b9c52e] text-white px-0 rounded-lg">
        <div
          class="menu-hover  py-2  font-medium lg:mx-2 flex items-center gap-2"
          onClick="">
          <img
            src="/watch.jpg"
            alt="profile"
            className="h-6 w-6 rounded-full  "
          />
          {selectedProduct ? selectedProduct : "Linta Khan (Account)"}
        </div>
        {/* <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span> */}
      </div>
      <div class="invisible absolute z-50 flex w-full flex-col rounded-b-lg  py-1 px-1 text-gray-800  group-hover:visible bg-[rgba(24,57,106,0.8)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] rounded-lb-b">
        {list.map((val, index) => (
          <Link href="/accounts">
            <p
              key={index}
              // onClick={() => handleProductClick(val)}
              class="my-1 block py-1 font-semibold text-white  hover:text-[#52b9c5] md:mx-2">
              {val}
            </p>
          </Link>
        ))}
        <p class="my-1 block py-1 font-semibold text-white  hover:text-[#52b9c5] md:mx-2">
          Logout
        </p>
      </div>
    </div>
    // </div>
  );
}

export default DropDownList;
