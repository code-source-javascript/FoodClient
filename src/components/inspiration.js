import React from "react";

export default function Inspiration(props) {
  return (
    <div>
      <div className=" ">
        <div className=" ">
          <img src={props.image} className=" " alt="#" />
        </div>
        <div className=" ">
          <div className="">{props.food}</div>
          <div className="">{props.restaurant}</div>
          <div className=" ">{props.price}</div>
        </div>
      </div>
    </div>
  );
}
