"use client";
import React from "react";
import AddressCard from "./components/addressCard/AddressCard";
import OrderSummary from "../common/orderSummary/OrderSummary";
import ProductOrderCard from "./components/productOrderCard/ProductOrderCard";

function Main() {
  return (
    <div className="my-8 grid grid-cols-5 gap-4 text-white">
      <div className="col-span-3">
        <AddressCard />
        <ProductOrderCard />
      </div>
      <div className="col-span-2">
        <OrderSummary text="Place Order" link="/payment" />
      </div>
    </div>
  );
}

export default Main;
