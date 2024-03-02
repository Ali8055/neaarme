import React from "react";
import FooterCard from "./FooterCard";
import { Icon } from "@iconify/react";

function Footer() {
  const customerCareData = [
    { name: "How to Buy", link: "/how-to-buy" },
    { name: "Returns & Refunds", link: "returns-and-refunds" },
    { name: "Contact us", link: "/contact-us" },
  ];
  const makeMoneyData = [
    { name: "Sell on NearMe", link: "/" },
    { name: "Contact us", link: "/contact-us" },
  ];
  const nearMeData = [
    { name: "About Us", link: "/about-us" },
    { name: "Terms And Condition", link: "/terms-and-conditions" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Online Shopping App", link: "/" },
    { name: "Number +138478347", link: "/" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto p-6 sm:p-0 sm:h-[300px] h-auto mt-10 text-white grid sm:grid-cols-4 grid-cols-2">
      <div className="flex flex-col">
        <FooterCard data={customerCareData} heading="Customer Care" />
        <FooterCard data={makeMoneyData} heading="Make Money With Us" />
      </div>
      <FooterCard data={nearMeData} heading="NearMe" />
      <div>
        <p className="text-lg my-2 text-[#c4ffff]">Payment Methods</p>
        <div className="flex gap-3">
          <img src="/visa.png" className="h-8 w-14 cursor-pointer" />
          <img src="/mastercard.png" className="h-8 w-14 cursor-pointer" />
          <img src="/western-union.jpg" className="h-8 w-14 cursor-pointer" />
        </div>
      </div>
      <div>
        <p className="text-lg my-2 text-[#c4ffff]">Follow Us</p>
        <div className="flex gap-3">
          <Icon
            icon="logos:twitter"
            className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
          />
          <Icon
            icon="logos:facebook"
            className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
          />
          <Icon
            icon="skill-icons:instagram"
            className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
          />
          <Icon
            icon="logos:youtube-icon"
            className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
