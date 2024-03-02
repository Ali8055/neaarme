import React from "react";

function ProductDesc() {
  return (
    <div className="bg-[rgba(24,57,106,0.25)]  shadow-lg rounded-lg p-6 backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)]  text-white">
      <h1 className="uppercase font-semibold">
        Product details of mkeup products
      </h1>
      <p className="py-3">
        Introducing the Sunisa Foundation, a must-have for achieving
        flawless-looking skin. This high-quality foundation, designed for the
        face, is a game-changer in the world of makeup. With its smooth
        application and long-lasting formula, it effortlessly evens out skin
        tone and provides a natural, radiant finish. Whether you’re going for a
        casual daytime look or a glamorous evening appearance, this foundation
        is your go-to choice for a seamless and polished complexion.
      </p>
      <p>Specifications of Sunisa foundation for flawless looking skin</p>
      <div className="my-2 flex gap-36">
        <div>
          <p className="text-white/50 py-2">Brand</p>
          <p>No Brand</p>
        </div>
        <div>
          <p className="text-white/50 py-2">SKU</p>
          <p>30940349_3948</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
