"use client";
import React from "react";
import Filter from "../common/filter/Filter";
import SortBy from "../common/sortBy/SortBy";

import BrandCard from "../common/brandCard/BrandCard";
import Link from "next/link";

function Main() {
  const products = [
    { img: "applelogo.jpg", label: "Apple" },
    { img: "zara.jpg", label: "Zara" },
    { img: "outfitters.jpg", label: "Outfitters" },
    { img: "nike.png", label: "Nike" },
    { img: "adidas.jpg", label: "Adidas" },
    { img: "applelogo.jpg", label: "Generation" },
    { img: "applelogo.jpg", label: "Ideas" },
    { img: "applelogo.jpg", label: "J." },
    { img: "applelogo.jpg", label: "J." },
    { img: "applelogo.jpg", label: "J." },
    { img: "applelogo.jpg", label: "J." },
    { img: "applelogo.jpg", label: "J." },
    { img: "applelogo.jpg", label: "J." },
    { img: "applelogo.jpg", label: "J." },
  ];
  const categories = [
    "Lipstick",
    "Eye Shadow",
    "Foundation",
    "Blushes",
    "Mascaras",
    "Compacts & Powder",
  ];
  const filter = [
    {
      label: "Brand Type",
      names: ["Local", "International"],
    },
    {
      label: "Brand Have",
      names: [
        "Digital Products",
        "Digital Services",
        "Physical Products",
        "Physical Services",
      ],
    },
  ];
  const sorting = ["Rating max to min", "Rating min to max"];
  return (
    <div className="grid grid-cols-5 my-10 text-white">
      <div className="col-span-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl ">
        <Filter filter={filter} categories={categories} />
      </div>
      <div className="col-span-4  p-6">
        <div className="flex items-center justify-between">
          <p>38438 items found</p>
          <SortBy sorting={sorting} />
        </div>
        <hr className="h-5 border-t-2 border-white/50 mt-4" />
        <div className="grid grid-cols-5 gap-5">
          {products.map((products) => (
            <Link href="/brand-shop">
              <BrandCard product={products} style="w-full h-32" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
