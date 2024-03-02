import React from "react";

function OrderCard() {
  return (
    <div className="my-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6  rounded-lg">
      <div className="text-sm">
        <div className=" flex gap-8">
          <p>Returned on: 09 Jul 2023 12:09</p>
          <p>Return to NearMe</p>
        </div>
        <p className="pt-1">Order # 778789818137</p>
      </div>
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
      <div className="grid grid-cols-4 gap-3 items-center text-sm p-2">
        <div className="flex gap-4 items-center col-span-2">
          <img src="watch.jpg" alt="watch" className="h-16 w-24" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dicta sed, maxime ad{" "}
          </p>
        </div>

        <div className="col-span-1 flex ">
          <p className="text-center bg-[#52b9c5] px-2 py-1 rounded-lg">
            Your refund has been approved
          </p>
        </div>
        <div className="col-span-1 flex gap-4">
          {" "}
          <p className="mr-2">
            <span className="text-white/80">Qty: </span>1
          </p>
          <p className="underline cursor-pointer hover:text-[#52b9c5]">
            More Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
