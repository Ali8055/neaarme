"use client";
import React from "react";
import Stars from "../../landingPage/components/stars/Stars";
import ImagePreview from "../../common/imagePreview/ImagePreview";

function UserReviewCard({ data }) {
  return (
    <div>
      <div className="flex gap-2">
        <Stars size="text-md" />
        <p>{data.name}</p>
      </div>
      <p className="py-2">{data.review}</p>
      <ImagePreview images={data.images} />
      <p>Color family : {data.colorFamily}</p>
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
    </div>
  );
}

export default UserReviewCard;
