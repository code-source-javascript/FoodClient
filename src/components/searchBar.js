import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="">
      <div className=" ">
        <BiSearch className="" />
      </div>
      <div className="">
        <input
          type="text"
          className=""
          placeholder="search for restaurants and foods"
        />
      </div>
    </div>
  );
}
