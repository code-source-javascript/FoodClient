import React from "react";

export default function Detail(props) {
  return (
    <div className=" mb-5 border-b pb-2">
      <span className="text-xl font-bold">{props.name}</span>
    </div>
  );
}
