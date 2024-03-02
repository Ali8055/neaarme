import React from "react";

function Card() {
  return (
    <div className="border border-white rounded-lg px-6 py-8">
      <p className="text-center text-lg">Conditons for Returns</p>
      <div className="my-4 text-sm">
        <p className="my-2">
          1. The product must be unused, unworn, unwashed and without any flaws.
          Fashion products can be tried on to see if they fit and will still be
          considered unworn. If a product is returned to us in an inadequate
          condition, we reserve the right to send it back to you.
        </p>
        <p className="my-2">
          2. The product must include the original tags, user manual, warranty
          cards, freebies and accessories.
        </p>
        <p className="my-2">
          3. The product must be returned in the original and undamaged
          manufacturer packaging / box.
        </p>
        <p>
          <strong>Note: </strong>
          It is important to indicate the order number and return tracking
          number on your return package to avoid any inconvenience/delay in
          process of your return.
        </p>
      </div>
    </div>
  );
}

export default Card;
