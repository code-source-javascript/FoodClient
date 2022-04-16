import React from "react";

export default function Inspiration(props) {
  return (
    <div>
      <div className="grid grid-cols-3 h-28 w-96 shadow m-5 ">
        <div className="col-span-1 object-cover rounded shadow overflow-hidden  ">
          <img src={props.image} className=" w-full h-28 rounded" alt="#" />
        </div>
        <div className="col-span-2  flex flex-col items-start justify-center pl-8 ">
          <div className="font-bold text-lg m-1">{props.food}</div>
          <div className="text-xs font-bold text-gray-500 pl-4 ">
            {props.restaurant}
          </div>
          <div className="m-1 pl-3 ">{props.price}</div>
        </div>
      </div>
    </div>
  );
}
