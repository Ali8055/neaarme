"use client";
import Popup from "@/app/components/common/popup/Popup";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

function PaymentOption() {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  return (
    <div>
      <p className="text-xl ">My Payment Options</p>
      <div className="my-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 flex justify-between rounded-lg w-[60%]">
        <div className="flex items-center gap-4 ">
          <Icon icon="streamline:bank-solid" className="text-3xl" />
          <p className="text-xl">Bank Account</p>
        </div>
        <div>
          <div
            className="px-5 flex items-center gap-3 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm cursor-pointer"
            onClick={() => setPopupVisibility(true)}>
            <Icon icon="mi:add" className="text-xl" />
            <p>Add Bank Account</p>
          </div>
        </div>
      </div>
      {isPopupVisible && <Popup setPopupVisibility={setPopupVisibility} />}
    </div>
  );
}

export default PaymentOption;
