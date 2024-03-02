import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const threshold = 200;

    setIsVisible(scrolled > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // window.onscroll = handleScroll;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-5 text-xl right-5 text-blue-500 hover:bg-blue-500 hover:text-white bg-white px-2 cursor-pointer py-2 rounded-full ${
        isVisible ? "block" : "hidden"
      }`}>
      {" "}
      <Icon icon="octicon:arrow-up-16" />
    </div>
  );
}

export default ScrollToTop;
