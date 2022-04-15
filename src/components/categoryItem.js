import React from "react";

export default function CategoryItem(props) {
  return (
    <div className="h-36 w-24 mx-10 rounded-full border-2 p-4 bg-white">
      <div className="text-6xl mb-3">{props.icon}</div>
      <div className="ml-1 font-serif">{props.name}</div>
    </div>
  );
}
