import Link from "next/link";
import React from "react";
import Stars from "../../landingPage/components/stars/Stars";

function BrandCard({ product, style }) {
  return (
    <>
      <div className="text-white text-center cursor-pointer ">
        <img
          src={product.img}
          className={`rounded-[30px] ${style} hover:scale-105 transition-transform duration-300 ease-in-out `}
        />
        <p className="text-md pt-2 font-semibold hover:text-[#65faff]">
          {product.label}
        </p>
        <Stars size="text-lg justify-center" />
      </div>
    </>
  );
}

export default BrandCard;
