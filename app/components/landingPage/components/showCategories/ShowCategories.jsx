"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

function ShowCategories() {
  const categories = [
    {
      icon: "game-icons:basket",
      label: "Groceries & Pets",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "icon-park-solid:lipstick",
      label: "Health & Beauty",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "ri:shirt-fill",
      label: "Men's Fashion",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:large-dress",
      label: "Women's Fashion",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "mingcute:baby-line",
      label: "Mother & Baby",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "Home & Lifestyle",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "Electronic Devices",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "Electronic Accessories",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "TV & Home Appliances",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "Sports & Outdoor",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "TV & Home Appliances",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "Watches, Bags & Jewellery",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "Automotive & Motorbike",
      list: ["Item 1", "Item 2", "Item 3"],
    },
    {
      icon: "game-icons:basket",
      label: "Automotive & Motorbike",
      list: ["Item 1", "Item 2", "Item 3"],
    },
  ];
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="sm:block hidden  rounded-2xl w-[20%] text-white px-3 py-2 bg-[rgba(24,57,106,0.25)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] ">
      {categories.map((val, index) => (
        <div
          key={index}
          className={`flex gap-2 items-center cursor-pointer my-1 ${
            hoveredCategory === index ? "underline" : ""
          }`}
          onMouseEnter={() => setHoveredCategory(index)}
          onMouseLeave={() => setHoveredCategory(null)}>
          <Icon icon={val.icon} />
          <p className="text-[15px]">{val.label}</p>
        </div>
      ))}
      {/* <div className="absolute top-0 left-[100%] ml-2 bg-black p-4 z-10">
        abc
      </div> */}
      {hoveredCategory !== null && (
        <div className="bg-black absolute top-0 left-full p-4">
          {/* <p>List for {categories[hoveredCategory].label}:</p> */}
          <ul>
            {categories[hoveredCategory].list.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowCategories;
