"use client";
import React, { useState } from "react";
import Magnifier from "react-magnifier";

function ImageMagnifier({ thumbnails }) {
  const [selectedImage, setSelectedImage] = useState("/toys.jpg");

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  return (
    <div className="">
      <Magnifier
        src={selectedImage}
        width="90%"
        style={{ height: "400px", borderRadius: "8px" }}
      />
      <div className="my-5 flex gap-3">
        {thumbnails.map((val, index) => (
          <img
            src={val}
            key={index}
            className="h-14 w-14 cursor-pointer hover:opacity-80 rounded-lg"
            onClick={() => handleThumbnailClick(val)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageMagnifier;
