"use client";
import React from "react";
import ProductCard from "@/app/components/common/productCard/ProductCard";

function FeaturedProducts() {
  const products = [
    {
      img: "/makeup.jpeg",
      label: "Makeup Products",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/electronics.jpg",
      label: "Electronics",
      price: "Rs. 5000",
      salePrice: "40%",
    },
    {
      img: "/toys.jpg",
      label: "Toys Factory",
      price: "Rs. 780",
      salePrice: "40%",
    },
    {
      img: "/babyproducts.jpg",
      label: "Baby products",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/watch.jpg",
      label: "Watch",
      price: "Rs. 989",
      salePrice: "40%",
    },
  ];
  return (
    <div className="my-8  bg-[#1f59642b]">
      <div className="flex justify-between items-center text-white px-3 py-4">
        <div className="flex gap-7 items-center">
          <p>On Sale Now</p>
          <p>Ending in</p>
          <div className="bg-[#ffc107] h-10 w-10 flex items-center justify-center">
            05
          </div>
          :
          <div className="bg-[#ffc107] h-10 w-10 flex items-center justify-center">
            02
          </div>
          :
          <div className="bg-[#ffc107] h-10 w-10 flex items-center justify-center">
            30
          </div>
        </div>
        <div className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-xl group cursor-pointer">
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#43a1ab] opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Show More
          </span>
          <span className="absolute inset-0 border-2 border-[#43a1ab] rounded-xl"></span>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
