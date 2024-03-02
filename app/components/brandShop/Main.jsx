"use client";
import React, { useState } from "react";
import InfoCard from "./infoCard/InfoCard";
import HomePage from "./homePage/HomePage";
import AllProducts from "./allProducts/AllProducts";
import AllServices from "./allServices/AllServices";

function Main() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="my-6 text-white">
      <InfoCard />
      <div className="p-4 flex gap-7 bg-[#235581] border-b border-r border-l border-t border-white/50 rounded-tr-lg">
        <p
          className={`cursor-pointer py-1 ${
            currentPage === "home" ? "border-b-4  border-white" : ""
          }`}
          onClick={() => handlePageClick("home")}>
          Home Page
        </p>
        <p
          className={`cursor-pointer py-1 ${
            currentPage === "products" ? "border-b-4  border-white" : ""
          }`}
          onClick={() => handlePageClick("products")}>
          All Products
        </p>
        <p
          className={`cursor-pointer py-1 ${
            currentPage === "services" ? "border-b-4   border-white" : ""
          }`}
          onClick={() => handlePageClick("services")}>
          All Services
        </p>
      </div>
      <div className="transition-opacity duration-500 ease-in-out">
        {" "}
        {currentPage === "home" && <HomePage />}
        {currentPage === "products" && <AllProducts />}
        {currentPage === "services" && <AllServices />}
      </div>
    </div>
  );
}

export default Main;
