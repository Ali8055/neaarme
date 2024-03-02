import React from "react";
import SubList from "./SubList";

function LeftSidebar({ onCardClick, selectedCard }) {
  const data = [
    {
      heading: "Manage My Account",
      list: ["My Profile", "Address Book", "My Payment Options"],
    },
    { heading: "My Orders", list: ["My Returns", "My Cancellations"] },
    { heading: "My Reviews", list: [] },
    { heading: "My Wishlist & Followed Stores", list: [] },
    { heading: "Sell On NearMe", list: [] },
  ];
  return (
    <div className="w-[20%] text-white py-4">
      <p>Hello, Linta Khan</p>
      {data.map((val, index) => (
        <SubList
          key={index}
          val={val}
          onCardClick={onCardClick}
          selectedCard={selectedCard}
        />
      ))}
    </div>
  );
}

export default LeftSidebar;
