import React from "react";

function AddressBook() {
  return (
    <div>
      <p className="text-xl ">Address Book</p>
      <div className="my-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 text-sm rounded-lg w-[50%]">
        <div className="flex justify-between items-center ">
          <p className="py-2 text-base">Linta Khan</p>
          <p className="underline cursor-pointer">Edit</p>
        </div>
        <p className="pt-1">(+92) 899898998</p>
        <p className="pb-2 pt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          obcaecati odio commodi dolorem incidunt
        </p>
      </div>
    </div>
  );
}

export default AddressBook;
