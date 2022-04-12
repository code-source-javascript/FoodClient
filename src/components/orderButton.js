import React from "react";
import { BsCart4 } from "react-icons/bs";

export default function OrderButton() {
  return (
    <div className="flex ">
      <div className="rounded-full h-5 w-5 text-xs text-center p-1 relative left-14 bottom-1 bg-red-500 text-white">
        1
      </div>
      <div className="rounded-full  h-12 w-12 p-3 text-2xl bg-red-200 ">
        <BsCart4 className="" />
      </div>
    </div>
  );
}
