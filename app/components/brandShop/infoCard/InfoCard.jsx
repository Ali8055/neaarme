"use client";
import { Icon } from "@iconify/react";
import React from "react";

function InfoCard() {
  return (
    <div className="border-t border-r border-l border-t-[#ffffff59] border-l-[#ffffff59] border-r-[#ffffff59] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 flex items-center w-[40%] rounded-t-md justify-between">
      <div className=" flex items-center gap-4 justify-between">
        <img src="/applelogo.jpg" className="rounded-full h-16 w-16" />
        <div>
          <p className="text-2xl">Apple</p>
          <p>3949 followers</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="">
          <Icon
            icon="material-symbols-light:chat"
            className="text-2xl mx-auto"
          />
          <p>Chat now</p>
        </div>
        <div>
          <Icon icon="ri:user-follow-line" className="text-2xl mx-auto" />
          <p>Follow</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
