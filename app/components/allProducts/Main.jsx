import React from "react";
import Filter from "../common/filter/Filter";
import SortBy from "../common/sortBy/SortBy";
import ProductCard from "../common/productCard/ProductCard";
import Link from "next/link";

function Main() {
  const products = [
    {
      img: "/Toys.jpg",
      label: "Toys",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/watch.jpg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/electronics.jpg",
      label: "Electronics product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
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
      label: "Location",
      names: ["Pakistan", "China"],
    },
    {
      label: "Category wise feature pochny hain",
      names: ["Pakistan", "China"],
    },
  ];
  const sorting = ["Top sales", "Price low to high", "Price high to low"];
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
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
          {products.map((product, index) => (
            <Link href="" key={index}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
