"use client";
import { Icon } from "@iconify/react";
import React from "react";
import Card from "./Card";

function ReturnProduct() {
  const data = [
    "Sign in to your NearMe Account, select My Orders.",
    "Tap on Initiate a Return",
    "Select “I want to return the product”.",
    "Fill out the Online Return Form with all the relevant information.",
    "Select Pick Up or Drop Off as per your preference, Submit the request",
    "Write your order number & return tracking number clearly on the outer side of the package.",
    "Head to your nearest drop-off point or wait for collection by our pick-up service",
    "Make sure you have written your order number and return tracking number on your package at the time of drop off",
    "You can view your return tracking number as soon as you have filled the Online Return Form and logged your return request.",
  ];
  return (
    <div className="flex my-3">
      <div className=" w-[70%]">
        {data.map((val, index) => (
          <div className="my-6" key={index}>
            <div className="flex gap-3 items-center my-3 ">
              <Icon
                icon="material-symbols:arrow-circle-right"
                className="text-2xl"
              />
              <p>{val}</p>
            </div>
            <hr className="border border-white/30 bg-transparent my-3" />
          </div>
        ))}
      </div>
      <div className="w-[30%] py-10 px-8">
        <Card />
      </div>
    </div>
  );
}

export default ReturnProduct;
