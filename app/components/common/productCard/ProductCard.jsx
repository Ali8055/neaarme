import React from "react";
import Stars from "../../landingPage/components/stars/Stars";

function ProductCard({ product }) {
  return (
    <div className="rounded-xl p-5 bg-[rgba(24,57,106,0.25)] shadow-lg backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ">
      <img
        src={product.img}
        alt="picture"
        className="h-[202px] w-[206px] rounded-lg"
      />
      <div className=" my-2">
        <p className="text-white text-lg font-medium ">{product.label}</p>
        <p className=" text-[#ffc107] font-medium text-lg">{product.price}</p>
        <p className=" text-white/80 font-medium text-sm mb-1">
          <del>{product.price}</del> {product.salePrice}
        </p>
        <Stars size="text-md text-white" />
      </div>
    </div>
  );
}

export default ProductCard;
