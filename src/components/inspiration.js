import React from "react";

export default function Inspiration(props) {
  return (
    <div className="my-5 mx-2 rounded shadow-md h-24  w-96 overflow-hidden">
      <div className=" flex bg-white w-96 rounded h-full">
        <div className="w-1/4 ">
          <img
            src={props.image}
            className="object-cover h-full w-full "
            alt="#"
          />
        </div>
        <div className=" w-3/4 pl-2 flex flex-col justify-center">
          <div className="text-lg font-bold text-gray-700 ">{props.food}</div>
          <div className=" font-bold text-xs text-gray-500">
            {props.restaurant}
          </div>
          <div className=" text-sm font-bold">{props.price}</div>
        </div>
      </div>
    </div>
  );
}
