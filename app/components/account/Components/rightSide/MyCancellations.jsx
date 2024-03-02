import React from "react";
import OrderCard from "./OrderCard";

function MyCancellations() {
  const card = [1, 2, 3];
  return (
    <div>
      <p className="text-xl ">My Cancellations</p>
      {card.map((val) => (
        <OrderCard />
      ))}
    </div>
  );
}

export default MyCancellations;
