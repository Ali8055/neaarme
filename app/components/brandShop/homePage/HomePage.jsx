import React, { useState } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import Link from "next/link";
import Pagination from "../../common/pagination/Pagination";

function HomePage() {
  const products = [
    {
      img: "/Toys.jpg",
      label: "Toys",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/watch.jpg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/electronics.jpg",
      label: "Electronics product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/toys.jpg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
    {
      img: "/makeup.jpeg",
      label: "featured product",
      price: "Rs. 1000",
      salePrice: "40%",
    },
  ];
  const productsPerPage = 10;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  return (
    <div>
      <img
        src="/banner1.jpg"
        className="h-[300px] w-full rounded-br-lg rounded-bl-lg"
      />
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-3 mt-8">
        {currentProducts.map((product, index) => (
          <Link href="">
            <ProductCard key={index} product={product} />
          </Link>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default HomePage;
