import React from "react";
import OrderCard from "./OrderCard";

function MyReturns() {
  const card = [1, 2, 3];
  return (
    <div>
      <p className="text-xl ">My Returns</p>
      {card.map((val) => (
        <OrderCard />
      ))}
    </div>
  );
}

export default MyReturns;
