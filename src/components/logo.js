import React from "react";
import LogoIcon from "../icons/logo";

export default function Logo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <LogoIcon color="#ff8f00" />
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        <div className="text-white font-extrabold text-6xl">Choppies</div>
        <div className=" text-gray-400 text-sm m-2 ">where everyone eats</div>
      </div>
    </div>
  );
}
