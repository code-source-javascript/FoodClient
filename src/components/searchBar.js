import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="flex border border-gray-200 shadow-none h-11 bg-white w-full items-center rounded-sm">
      <div className=" p-2  mx-2">
        <BiSearch className="" />
      </div>
      <div className="w-full">
        <input
          type="text"
          className="border-none outline-none text-sm bg-white p-1 w-full"
          placeholder="search for restaurants and foods"
        />
      </div>
    </div>
  );
}
