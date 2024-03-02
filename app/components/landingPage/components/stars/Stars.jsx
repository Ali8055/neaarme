import { Icon } from "@iconify/react";
import React from "react";

function Stars({ size }) {
  return (
    <div className={`flex items-center gap-1  ${size}`}>
      <Icon icon="ic:baseline-star" />
      <Icon icon="ic:baseline-star" />
      <Icon icon="ic:baseline-star" />
      <Icon icon="ic:baseline-star" />
      <Icon icon="mdi:star-outline" />
    </div>
  );
}

export default Stars;
