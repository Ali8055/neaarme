import React from "react";
import PostReview from "./PostReview";
import SelectBar from "./SelectBar";
import Stars from "@/app/components/landingPage/components/stars/Stars";

function MyReviews({ setShow, show, handleSelect, showCard }) {
  const heading = ["To Review", "History"];
  return (
    <div>
      <p className="text-xl ">My Reviews</p>
      <SelectBar
        handleSelect={handleSelect}
        show={showCard}
        heading={heading}
      />
      {showCard === "To Review" && (
        <div className="my-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8  rounded-lg w-[60%]">
          <div className="flex justify-between">
            <div>
              <p>Shop name</p>
              <p className="text-white/80 text-sm">Purchased on date</p>
            </div>
            <div>
              <button
                className="bg-[#52b9c5] text-sm rounded-lg px-3 py-2"
                onClick={() => setShow(true)}>
                Give Review
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <img
              src="/watch.jpg"
              className="h-20 w-24 rounded-lg"
              alt="picture"
            />
            <div>
              <p className="capitalize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi, voluptates.
              </p>
              <p className="text-sm text-white/80">Color Family : Black</p>
            </div>
          </div>
          {show && <PostReview />}
        </div>
      )}
      {showCard === "History" && (
        <div className="my-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8  rounded-lg">
          <div className="">
            <div>
              <p>Shop name</p>
              <p className="text-white/80 text-sm">Purchased on date</p>
            </div>
            <div className="mt-3 flex items-center gap-5">
              <img
                src="/watch.jpg"
                alt="picture"
                className="h-20 w-20 rounded-lg"
              />
              <div>
                <p className="capitalize">Developer sticker </p>
                <p className="capitalize text-sm text-white/70">
                  Color Family : Multicolor{" "}
                </p>
                <Stars size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyReviews;
