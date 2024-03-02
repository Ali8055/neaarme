import { Icon } from "@iconify/react";
import React, { useState } from "react";

function ImagePreview({ images }) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };
  const closeImageModal = () => {
    setSelectedImage("");
    setShowImageModal(false);
  };

  return (
    <div className="flex gap-3 my-2">
      {images.map((val, index) => (
        <img
          key={index}
          src={val}
          className="rounded-lg h-24 w-24 cursor-pointer"
          onClick={() => openImageModal(val)}
        />
      ))}

      {showImageModal && (
        <div
          className={`${
            showImageModal ? "fade-in" : "fade-out"
          } fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-40 flex justify-center items-center duration-500 ease-in-out `}>
          <div className="max-w-4/5 max-h-4/5">
            <div className="absolute top-0 right-0 p-4">
              <Icon
                icon="ic:round-close"
                className="text-white cursor-pointer text-3xl hover:bg-[#0000001c]"
                onClick={closeImageModal}
              />
            </div>
            <img
              src={selectedImage}
              alt="Enlarged"
              className={`${
                showImageModal ? "fade-in" : "fade-out"
              } max-w-full max-h-full`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;
