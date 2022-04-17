import React from "react";
import CartIcon from "../icons/Cart";

export default function OrderButton() {
  return (
    <div className="flex">
      <div className="relative">
        <div className="rounded-full h-4 w-4 text-xs text-center  absolute -top-1 -right-2 bottom-1 bg-red-500 text-white font-bold ">
          1
        </div>
        <div className="rounded-full flex justify-center items-center h-9 w-9 bg-red-200 ">
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
