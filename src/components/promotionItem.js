import React from "react";

export default function PromotionItem(props) {
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="">
          <img
            src={props.image}
            alt={props.imageAlt}
            className="w-80 h-80 object-cover rounded-lg"
          />
        </div>
        <h3 className="">{props.name}</h3>
        <p className="">{props.price}</p>
        <div className="">23%</div>
      </div>
    </div>
  );
}
