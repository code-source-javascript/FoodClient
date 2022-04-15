import React from "react";
import LogoIcon from "../icons/logo";

export default function Logo() {
  return (
    <div className="flex justify-center items-center ">
      <div className="text-red-600 text-6xl mr-2 ">
        <LogoIcon />
      </div>
      <div className="text-center flex flex-col">
        <span className="font-bold uppercase text-xl self-stretch">
          Choppies
        </span>
        <span className="text-xs text-gray-500">where everyone eats</span>
      </div>
    </div>
  );
}
