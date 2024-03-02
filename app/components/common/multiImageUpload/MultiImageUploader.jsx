import React from "react";

function MultiImageUploader() {
  return (
    <div className="mt-3">
      <label class="block mb-2  text-sm font-medium" for="multiple_files">
        Upload Picture
      </label>
      <input
        class="block w-full text-sm border border-white p-2 bg-[#266480] rounded-lg cursor-pointer  dark:text-gray-400 focus:outline-none dark:placeholder-gray-400"
        id="multiple_files"
        type="file"
        multiple
      />
    </div>
  );
}

export default MultiImageUploader;
