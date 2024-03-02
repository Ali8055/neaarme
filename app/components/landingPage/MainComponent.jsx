"use client";
import React, { useState } from "react";
import ShowCategories from "./components/showCategories/ShowCategories";
import CarouselCard from "./components/carousel/Carousel";
import Banner from "./components/banner/Banner";
import BrandNames from "./components/brandNames/BrandNames";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";
import ProductCard from "../common/productCard/ProductCard";
import Link from "next/link";
import ScrollToTop from "../common/scrollToTop/ScrollToTop";

function MainComponent() {
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
  const initialDisplayCount = 10;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const visibleProducts = products.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 10);
  };
  return (
    <div className="">
      {" "}
      <div className="flex  gap-3 mt-5 ">
        <ShowCategories />
        <CarouselCard />
      </div>
      <Banner />
      <BrandNames />
      <FeaturedProducts />
      <div>
        <p className="text-2xl text-white font-semibold py-6">Just For You</p>
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-3">
          {visibleProducts.map((product, index) => (
            <Link href="/products/1">
              <ProductCard key={index} product={product} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-8">
          <div
            onClick={handleLoadMore}
            className="relative inline-flex items-center justify-center px-20 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white border border-[#43a1ab] rounded-lg group cursor-pointer ">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-[#43a1ab] rounded-full group-hover:w-60 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Load More</span>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default MainComponent;
