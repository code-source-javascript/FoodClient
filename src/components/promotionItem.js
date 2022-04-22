import React from "react";

export default function PromotionItem(props) {
  return (
    <div className="flex justify-center ">
      <div className="relative">
        <div className="">
          <img
            src={props.image}
            alt={props.imageAlt}
            className="w-80 h-80 object-cover rounded-lg"
          />
        </div>
        <h3 className="font-bold text-lg text-gray-600">{props.name}</h3>
        <p className="font-light ">{props.price}</p>
        <div className="absolute top-5 right-0 bg-orange-400 text-gray-100 w-14 h-7 text-center font-extrabold p-1  rounded-tl rounded-bl">
          23%
        </div>
      </div>
    </div>
  );
}
