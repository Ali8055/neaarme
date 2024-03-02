import React from "react";

function Filter({ filter, categories }) {
  console.log("categories", categories);
  console.log("filterrrr", filter);

  // const brandhave = [
  //   "Digital Products",
  //   "Digital Services",
  //   "Physical Products",
  //   "Physical Services",
  // ];
  return (
    <div className="p-6 rounded-xl">
      <div>
        <h1 className="text-lg text-orange-400">Category</h1>
        <hr className="h-5 border-t-2 border-white/50 mt-4" />
        <div>
          {categories?.map((val) => (
            <p className="cursor-pointer hover:underline">{val}</p>
          ))}
        </div>
      </div>
      {filter.map((val, index) => (
        <div className="mt-5" key={index}>
          <h1 className="text-lg text-orange-400">{val.label}</h1>
          <hr className="h-5 border-t-2 border-white/50 mt-4" />
          {val.names?.map((data, index) => (
            <div className="flex gap-2" key={index}>
              <input type="checkbox" className="w-4 rounded-lg" />
              <p className="cursor-pointer hover:underline">{data}</p>
            </div>
          ))}
        </div>
      ))}

      <div className="mt-5">
        <h1 className="text-lg text-orange-400">Price Range</h1>
        <hr className="h-5 border-t-2 border-white/50 mt-4" />
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Min"
            className="py-1 px-2 w-[5.7rem]  bg-transparent border border-orange-400 focus:outline-none rounded-lg"
          />
          <p>-</p>
          <input
            type="number"
            placeholder="Max"
            className="py-1 px-2 w-[5.7rem]  bg-transparent border border-orange-400 focus:outline-none rounded-lg"
          />
        </div>
        <button className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-4 mt-3 w-full rounded-lg">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
