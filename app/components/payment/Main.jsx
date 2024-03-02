"use client";
import React from "react";
import PaymentMethodCard from "./components/paymentMethodCard/PaymentMethodCard";
import OrderSummary from "../common/orderSummary/OrderSummary";

function Main() {
  const paymentMethod = [{ name: "Credit/Debit Card", image: "carbon:wallet" }];
  return (
    <div className="my-8 grid grid-cols-5 gap-4  text-white">
      <div className="col-span-3">
        <p className="text-xl py-4">Select Payment Method</p>
        <div className="grid grid-cols-5 gap-4 ">
          {paymentMethod.map((val) => (
            <PaymentMethodCard data={val} />
          ))}
        </div>
      </div>
      <div className="col-span-2 py-14">
        <OrderSummary name="Payment" link="" />
      </div>
    </div>
  );
}

export default Main;
