import React from "react";

function Topbar() {
  return (
    <div className="mt-2 mx-2 flex justify-between ">
      <div className="flex gap-4">
        <p className="text-white text-sm cursor-pointer hover:underline">
          Become a seller
        </p>
        <p className="text-white text-sm cursor-pointer  hover:underline">
          Help and support
        </p>
      </div>
      <div className="text-white text-sm cursor-pointer">NearMe App</div>
    </div>
  );
}

export default Topbar;
