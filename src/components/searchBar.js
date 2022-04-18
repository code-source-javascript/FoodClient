import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className=" flex border rounded  h-10 justify-center items-center w-5/6 my-5">
      <div className="w-1/6 md:w-1/12 flex justify-center items-center">
        <BiSearch className="" />
      </div>
      <div className="w-5/6 md:w-11/12 h-full">
        <input
          type="text"
          className="w-full h-full outline-none text-xs pl-4"
          placeholder="search for restaurants and foods"
        />
      </div>
    </div>
  );
}
