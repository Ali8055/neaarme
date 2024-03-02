import { Icon } from "@iconify/react";
import React, { useState } from "react";

function DecQTY() {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <form className="max-w-xs ">
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={decrementQuantity}
          className="bg-[#52b9c5]    border-gray-300 rounded-s-lg p-3 h-11  focus:outline-none">
          <Icon className="text-white" icon="ic:twotone-minus" />
        </button>
        <input
          type="text"
          id="quantity-input"
          value={quantity}
          readOnly
          className="bg-gray-50  border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="999"
          required
        />
        <button
          type="button"
          onClick={incrementQuantity}
          className="bg-[#52b9c5]  dark:bg-gray-700  dark:border-gray-600  border border-gray-300 rounded-e-lg p-3 h-11    focus:outline-none">
          <Icon className="text-white" icon="ic:round-plus" />
        </button>
      </div>
    </form>
  );
}

export default DecQTY;
