"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselCard() {
  const imageStyle = {
    borderRadius: "16px",
  };
  return (
    <div className=" sm:w-[80%]  w-full sm:rounded-xl rounded-none ">
      <Carousel
        showThumbs={false}
        autoPlay
        interval={2000}
        infiniteLoop
        className="carousel-container sm:rounded-xl rounded-none ">
        <div className="h-[387px]">
          <img
            src="/banner1.jpg"
            alt="banner"
            className="h-full"
            style={imageStyle}
          />
        </div>
        <div className="h-[387px]">
          <img
            src="/banner2.jpg"
            alt="banner"
            className="h-full"
            style={imageStyle}
          />
        </div>
        <div className="h-[387px]">
          <img
            src="/banner3.jpg"
            alt="banner"
            className="h-full"
            style={imageStyle}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselCard;
