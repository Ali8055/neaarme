"use client";
import React, { useState } from "react";
import LeftSidebar from "./Components/leftSidebar/LeftSidebar";
import RightSide from "./Components/rightSide/RightSide";

function Main() {
  const [selectedCard, setSelectedCard] = useState("Manage My Account");

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <div className="my-6 flex">
      <LeftSidebar onCardClick={handleCardClick} selectedCard={selectedCard} />
      <RightSide selectedCard={selectedCard} />
    </div>
  );
}

export default Main;
