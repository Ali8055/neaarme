import React from "react";
import Card from "./Card";

function ReturnPolicy() {
  const data = [
    "1. If your product is damaged, defective, incorrect or incomplete at the time of delivery, please raise a return request on NearMe app or website.Return request must be raised within 14 days for all items from the date of delivery.All NearMe Mall items are 100% Authentic by Trusted Brands and are covered under 2x Money Back Guarantee. Note: Groceries and Digital Goods are excluded from 2x Money Back Guarantee.",
    "2. For electronic appliances & mobile phones related issues after usage or after the return policy period, please check if the product is covered under seller warranty or brand warranty.For purchases under NearMe Like New, your product is covered under 3-Months Warranty (for phones) and 6-Months Warranty (for laptops and tablets). Refer to NearMe Like New Warranty Policy and Warranty Policy for complete Terms and Conditions.",
    "3. For selected categories, we accept a change of mind. Please refer to the section below on Return Policy per Category for more information.",
  ];
  return (
    <div className="flex my-3">
      <div className=" w-[70%]">
        <p className="px-1 text-xl">Free & Easy Return Policy</p>
        {data.map((val, index) => (
          <div className="my-6" key={index}>
            <div className="my-3 ">
              <p>{val}</p>
            </div>
            <hr className="border border-white/30 bg-transparent my-3" />
          </div>
        ))}
      </div>
      <div className="w-[30%] py-10 px-8">
        <Card />
      </div>
    </div>
  );
}

export default ReturnPolicy;
