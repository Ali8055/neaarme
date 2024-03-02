import { Icon } from "@iconify/react";
import React from "react";

function Service() {
  return (
    <div className="text-white">
      <h1 className=" text-sm mb-3">Service</h1>
      <div className="flex gap-2 mb-2">
        <Icon icon="simple-icons:near" />
        <div>
          <p>NearMe Verified</p>
          <p className="text-xs text-white/70">Get exactly what you ordered!</p>
        </div>
      </div>
      <div className="flex gap-2 mb-2">
        <Icon icon="game-icons:return-arrow" />
        <div>
          <p>14 days free & easy return</p>
          <p className="text-xs text-white/70">
            Change of mind is not applicable
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Icon icon="material-symbols:safety-check-off-outline" />
        <div>
          <p>Warranty not available</p>
        </div>
      </div>
      <hr className="h-5 border-t-2 border-white/50 mt-4" />
    </div>
  );
}

export default Service;
