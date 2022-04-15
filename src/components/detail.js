import React from "react";

export default function Detail(props) {
  return (
    <div className="xl:pl-20  pl-3 mb-5 border-4">
      <span className="text-xl font-bold">{props.name}</span>
    </div>
  );
}
