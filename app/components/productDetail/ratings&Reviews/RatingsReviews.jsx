"use client";
import React from "react";
import Stars from "../../landingPage/components/stars/Stars";
import UserReviewCard from "./UserReviewCard";

function RatingsReviews() {
  const review = [
    {
      name: "Maria",
      review:
        "ordered XL size and XL was mentioned on the rapper too but in actual the size was too big really disappointed",
      colorFamily: "M",
      images: ["/makeup.jpeg", "/makeup.jpeg", "/makeup.jpeg", "/makeup.jpeg"],
    },
    {
      name: "Anum",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sed placeat vero, natus porro harum. Voluptatibus doloremque, sint consectetur est porro nam, non recusandae explicabo ipsa unde voluptas molestiae minus!",
      colorFamily: "XL",
      images: ["/makeup.jpeg"],
    },
    {
      name: "Zara",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias, vitae ipsum hic nisi esse provident iure, molestias quisquam nostrum, itaque rem labore libero ipsam cum numquam facilis enim necessitatibus.",
      colorFamily: "L",
      images: ["/makeup.jpeg", "/makeup.jpeg", "/makeup.jpeg"],
    },
  ];
  return (
    <div className="bg-[rgba(24,57,106,0.25)]  shadow-lg rounded-lg p-6 backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] my-10 text-white">
      <h1 className="text-white mb-3">Ratings & Reviews</h1>
      {/* stars section */}
      <div className="flex  gap-10">
        <div className="">
          <p className="text-3xl pb-2">4.2</p>
          <Stars size="text-lg" />
          <p className="py-2">537 ratings</p>
        </div>

        <div className="border-white/40 border-l px-10">
          {" "}
          <Stars size="text-lg mb-1" />
          <Stars size="text-lg mb-1" />
          <Stars size="text-lg mb-1" />
          <Stars size="text-lg mb-1" />
          <Stars size="text-lg mb-1" />
        </div>
      </div>
      {/* ..... */}
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
      {review.map((val, index) => (
        <UserReviewCard key={index} data={val} />
      ))}
    </div>
  );
}

export default RatingsReviews;
