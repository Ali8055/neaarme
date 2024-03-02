"use client";
import React from "react";
import Stars from "../../landingPage/components/stars/Stars";
import DecQTY from "../../common/inc/decQTY/Inc/DecQTY";
import ImageMagnifier from "../imageMagnifier/ImageMagnifier";
import Delivery from "../delivery/Delivery";
import Service from "../service/Service";
import SoldBy from "../soldBy/SoldBy";
import { Icon } from "@iconify/react";
import Link from "next/link";

function ShowDetailCard() {
  const product = {
    name: "Product Name",
    mainImage: "/makeup.jpeg",
    zoomedImage: "/makeup.jpeg",
  };

  const thumbnails = ["/makeup.jpeg", "/toys.jpg", "/watch.jpg"];
  return (
    <div className="bg-[rgba(24,57,106,0.25)] grid  grid-cols-3 shadow-lg rounded-lg p-6 backdrop-blur-[5px] border border-[rgba(255,255,255,0.18)] ">
      <div>
        <ImageMagnifier product={product} thumbnails={thumbnails} />
        {/* <img src="/makeup.jpeg" className="" /> */}
      </div>
      <div className="text-white capitalize ">
        <p className="text-3xl">Pack of makeup products</p>
        <div className="my-2 text-sm">
          <div className="flex items-center  gap-2">
            <Stars size="text-[15px]" />
            <p className="text-orange-300 font-medium">2177 ratings</p>
          </div>
          <p className="text-white/80 mt-1">
            Brand:{" "}
            <span className="hover:underline cursor-pointer text-white">
              No brand
            </span>
          </p>
        </div>
        <hr className="h-5 border-t-2 border-white/50 mt-4" />
        <div>
          <p className="text-xl">Rs. 549</p>
          <p>
            <del className="text-white/50">Rs. 1000</del> -48%
          </p>
        </div>
        <hr className="h-5 border-t-2 border-white/50 mt-4" />
        <div className="mb-6">
          <p>Color Family</p>
          <div className="flex gap-3 mt-2">
            <div className="h-8 w-8 bg-black cursor-pointer"></div>
            <div className="h-8 w-8 bg-orange-400 cursor-pointer"></div>
            <div className="h-8 w-8 bg-blue-400 cursor-pointer"></div>
            <div className="h-8 w-8 bg-purple-400 cursor-pointer"></div>
            <div className="h-8 w-8 bg-blue-500 cursor-pointer"></div>
            <div className="h-8 w-8 bg-yellow-400 cursor-pointer"></div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p>Quantity</p>
          <DecQTY />
        </div>

        <div className="flex gap-3 justify-center mt-10">
          <button class="w-[35%]  relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-[#52b9c5] rounded-lg hover:bg-white group">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
            <span class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              Buy Now
            </span>
          </button>
          <button class="w-[35%]  relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-[#52b9c5] rounded-lg hover:bg-white group">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
            <span class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
      <div className="px-8 ">
        <Delivery />
        <Service />
        <SoldBy />
        <Link href="/brand-shop">
          <button className="relative mt-5 w-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#52b9c5] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 hover:text-white">
              <Icon
                icon="ph:arrow-right-light"
                className="w-5 h-5 text-[#52b9c5] font-bold"
              />
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <Icon
                icon="ph:arrow-right-light"
                className="w-5 h-5 text-white"
              />
            </span>
            <span class="relative w-full text-left text-[#52b9c5] transition-colors duration-200 ease-in-out group-hover:text-white">
              Visit Store
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ShowDetailCard;
