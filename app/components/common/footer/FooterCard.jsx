import Link from "next/link";
import React from "react";

function FooterCard({ data, heading }) {
  return (
    <div>
      <p className="text-lg my-2 text-[#c4ffff]">{heading}</p>
      {data.map((val, index) => (
        <Link href={val.link}>
          <p key={index} className="text-md hover:underline cursor-pointer">
            {val.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default FooterCard;
