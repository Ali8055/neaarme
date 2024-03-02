import React from "react";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const generatePageLinks = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <p
            className={`relative block cursor-pointer rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300 ${
              i === currentPage ? "bg-white  " : "hover:bg-[#52b9c5] text-white"
            } ${i === currentPage ? "text-[#52b9c5] dark:text-white" : ""}`}
            onClick={() => setCurrentPage(i)}>
            {i}
          </p>
        </li>
      );
    }
    return pages;
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <nav aria-label="Page navigation example" className="my-5">
      <ul className="list-style-none flex justify-end">
        <li>
          <p
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all duration-300 ${
              currentPage === 1
                ? "cursor-not-allowed"
                : "hover:bg-[#52b9c5] dark:hover:bg-neutral-700"
            } ${currentPage === 1 ? "text-gray-400" : "hover:text-white"}`}
            onClick={goToPreviousPage}>
            Previous
          </p>
        </li>
        {generatePageLinks()}
        <li>
          <p
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all duration-300 ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "hover:bg-[#52b9c5] dark:hover:bg-neutral-700"
            } ${
              currentPage === totalPages ? "text-gray-400" : "hover:text-white"
            }`}
            onClick={goToNextPage}>
            Next
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
