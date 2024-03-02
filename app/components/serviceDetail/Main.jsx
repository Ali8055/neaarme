"use client";
import React from "react";
import ShowDetailCard from "../productDetail/showDetailCard/ShowDetailCard";
import RatingsReviews from "../productDetail/ratings&Reviews/RatingsReviews";
import ProductDesc from "../productDetail/productDescription/ProductDesc";
import ProductCard from "../common/productCard/ProductCard";
import Link from "next/link";

function Main() {
  const products = [
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
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
  ];

  return (
    <div className="my-6 ">
      <ShowDetailCard />
      <RatingsReviews />
      <ProductDesc />
      <div className="my-10 text-white">
        <p className="my-3 text-xl ">Related Services</p>
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-3 ">
          {products.map((product, index) => (
            <Link href="/products/1">
              <ProductCard key={index} product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
