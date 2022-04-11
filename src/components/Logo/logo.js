import React from "react";
import { MdFoodBank } from "react-icons/md";
export default function Logo() {
  return (
    <div className="flex flex-col justify-center text-center ">
      <div className="text-red-600 text-5xl  w-12 m-auto">
        <MdFoodBank />
      </div>
      <div>
        <p className="-mt-2 font-semibold font-mono">FoodApp</p>
      </div>
    </div>
  );
}
