"use client";
import React, { useState } from "react";
import SelectBar from "./SelectBar";
import OrderCard from "./OrderCard";

function MyOrders({ show, handleSelect }) {
  const card = [1, 2, 3];
  const heading = ["All", "To Pay", "To Ship", "To Receive"];
  return (
    <div>
      <p className="text-xl ">My Orders</p>
      <SelectBar handleSelect={handleSelect} show={show} heading={heading} />
      {show === "All" && card.map((val) => <OrderCard />)}
      {show === "To Pay" && <OrderCard />}
      {show === "To Ship" && <OrderCard />}
      {show === "To Receive" && <OrderCard />}
    </div>
  );
}

export default MyOrders;
