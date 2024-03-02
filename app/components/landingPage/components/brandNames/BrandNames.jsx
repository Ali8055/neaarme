"use client";
import React from "react";
import BrandCard from "@/app/components/common/brandCard/BrandCard";
import Link from "next/link";

function BrandNames() {
  const products = [
    { img: "/applelogo.jpg", label: "Apple" },
    { img: "/zara.jpg", label: "Zara" },
    { img: "/outfitters.jpg", label: "Outfitters" },
    { img: "/nike.png", label: "Nike" },
    { img: "/adidas.jpg", label: "Adidas" },
    { img: "/generation.png", label: "Generation" },
    { img: "/ideas.png", label: "Ideas" },
    { img: "/j..jpg", label: "J." },
  ];
  return (
    <div className="rounded-2xl rounded-mg p-5 bg-[rgba(24,57,106,0.25)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] my-8 ">
      <div className="flex justify-end mb-3">
        <Link href="/all-brands">
          <p className="text-white underline hover:text-blue-400 ">Show More</p>
        </Link>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-9 ">
        {products.map((product) => (
          <Link href="/brand-shop">
            <BrandCard product={product} style="h-28 w-32" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BrandNames;
