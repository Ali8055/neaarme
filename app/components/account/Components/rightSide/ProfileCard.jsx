import React from "react";

function ProfileCard() {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 w-[33%] rounded-lg">
      <div className="flex justify-between">
        <p>Personal Profile</p>
        <p className="cursor-pointer underline text-sm">Edit</p>
      </div>
      <p className="capitalize mt-4 text-sm">linta khan</p>
      <p className="text-sm pt-1">lintakhan789@gmail.com</p>
    </div>
  );
}

export default ProfileCard;
