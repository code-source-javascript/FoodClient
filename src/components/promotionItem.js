import React from "react";

export default function PromotionItem(props) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={props.image} alt={props.imageAlt} className="" />
        </div>
        <h3 className="">{props.name}</h3>
        <p className="">{props.price}</p>
        <div className="">23%</div>
      </div>
    </div>
  );
}
