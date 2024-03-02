"use client";
import React, { useState } from "react";
import ReturnProduct from "./components/ReturnProduct";
import ReturnPolicy from "./components/ReturnPolicy";
import RefundPolicy from "./components/RefundPolicy";

function Main() {
  const data = ["How to Return a Product", "Returns Policy", "Refunds Policy"];
  const [product, setProduct] = useState("How to Return a Product");
  const handleProduct = (val) => {
    setProduct(val);
  };
  console.log("product", product);
  return (
    <div className=" my-8 p-7 rounded-lg text-white bg-[rgba(24,57,106,0.25)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)]">
      <h1 className="text-2xl my-3">Returns & Refunds</h1>
      <div className="flex gap-8 my-6">
        {data.map((val, index) => (
          <button
            key={index}
            className={`inline-flex w-full items-center px-6 py-3 hover:bg-[#52b9c5] border border-[#52b9c5]  rounded-md text-white ${
              product == val ? " bg-[#52b9c5]" : "bg-transparent"
            } `}
            onClick={() => handleProduct(val)}>
            {val}
          </button>
        ))}
      </div>

      {product === "How to Return a Product" && <ReturnProduct />}
      {product === "Returns Policy" && <ReturnPolicy />}
      {product === "Refunds Policy" && <RefundPolicy />}
    </div>
  );
}

export default Main;
