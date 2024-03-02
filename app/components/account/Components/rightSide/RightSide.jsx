import React, { useState } from "react";

import MyProfile from "./MyProfile";
import ManageMyAccount from "./ManageMyAccount";
import AddressBook from "./AddressBook";
import MyReturns from "./MyReturns";
import PaymentOption from "./PaymentOption";
import MyOrders from "./MyOrders";
import MyCancellations from "./MyCancellations";
import MyReviews from "./MyReviews";
import PostReview from "./PostReview";
import MyWishListFollowedStore from "./MyWishListFollowedStore";

function RightSide({ selectedCard }) {
  console.log("secledd", selectedCard);
  const [show, setShow] = useState(false);
  const [showCard, setShowCard] = useState("All");
  const handleSelect = (val) => {
    setShowCard(val);
  };

  return (
    <div className="w-[80%] p-4 text-white ">
      {selectedCard === "My Profile" && <MyProfile />}
      {selectedCard === "Manage My Account" && <ManageMyAccount />}
      {selectedCard === "My Returns" && <MyReturns />}
      {selectedCard === "Address Book" && <AddressBook />}
      {selectedCard === "My Payment Options" && <PaymentOption />}
      {selectedCard === "My Orders" && (
        <MyOrders show={showCard} handleSelect={handleSelect} />
      )}
      {selectedCard === "My Cancellations" && <MyCancellations />}
      {selectedCard === "My Wishlist & Followed Stores" && (
        <MyWishListFollowedStore show={showCard} handleSelect={handleSelect} />
      )}
      {selectedCard === "My Reviews" && (
        <MyReviews
          setShow={setShow}
          show={show}
          showCard={showCard}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
}

export default RightSide;
