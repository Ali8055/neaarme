import MultiImageUploader from "@/app/components/common/multiImageUpload/MultiImageUploader";
import Stars from "@/app/components/landingPage/components/stars/Stars";

import React from "react";

function PostReview({ setShow }) {
  return (
    <div className="mt-3">
      <div className="flex justify-between">
        <div>
          <p>Product </p>
          <Stars size={30} />
        </div>
        <div>
          <p>Seller Service</p>
          <Stars size={30} />
        </div>
        <div>
          <p>Delivery Service</p>
          <Stars size={30} />
        </div>
      </div>
      <div>
        <MultiImageUploader />
        <div className="mt-3">
          <p>Write Review</p>
          <textarea
            rows={4}
            placeholder="Enter Review"
            className="w-full border borer-white bg-transparent p-2 rounded-lg focus:outline-none mt-2"
          />{" "}
        </div>
      </div>
      <div className="flex gap-4 mt-3">
        <button className="text-white px-12 bg-[#52b9c5] rounded-lg py-2">
          Post
        </button>
        <button
          onClick={() => setShow(false)}
          className="border-[#52b9c5] border px-8 text-white rounded-lg py-2">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PostReview;
