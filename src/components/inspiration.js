import React from "react";

export default function Inspiration(props) {
  return (
    <div className="my-5 mx-2 rounded border h-28">
      <div className=" flex bg-white w-80 rounded h-full">
        <div className="w-2/6 ">
          <img src={props.image} className="object-cover " alt="#" />
        </div>
        <div className=" w-4/6 pl-2 flex flex-col justify-center">
          <div className="text-lg font-bold text-gray-700 ">{props.food}</div>
          <div className=" font-bold text-xs text-gray-500">
            {props.restaurant}
          </div>
          <div className=" flex justify-end pr-5 text-sm font-bold">{props.price}</div>
        </div>
      </div>
    </div>
  );
}
