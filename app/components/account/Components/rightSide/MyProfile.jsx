import React from "react";

function MyProfile() {
  return (
    <div>
      <p className="text-xl ">My Profile</p>
      <div className="my-4  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 text-sm rounded-lg ">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-base">
            <p className="text-white/80">Full Name</p>
            <p className="py-2 ">Linta Khan</p>
          </div>
          <div className="text-base">
            <p className="text-white/80">Email</p>
            <p className="py-2 ">lintakhan789@gmail.com</p>
          </div>
          <div className="text-base">
            <p className="text-white/80">Mobile</p>
            <p className="py-2 ">8787878989</p>
          </div>
          <div className="text-base">
            <p className="text-white/80">Gender</p>
            <p className="py-2 ">Female</p>
          </div>
          <div className="text-base">
            <p className="text-white/80">Birthday</p>
            <p className="py-2 ">11 jan, 2000</p>
          </div>
        </div>
        <div className="pt-8 ">
          <button className="mr-3 rounded relative inline-flex group items-center justify-center px-3.5 py-2 w-[20%] cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Edit Profile</span>
          </button>
          <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 w-[20%] cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Change Password</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
