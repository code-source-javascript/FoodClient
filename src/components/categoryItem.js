import React from "react";

export default function CategoryItem(props) {
  return (
    <div className="h-36 w-24 mx-5 xl:mx-10 rounded-full border-2 p-4 bg-white flex flex-col items-center justify-center shadow-inner">
      <div className=" mb-3">{props.icon}</div>
      <div className="ml-1  text-sm font-bold">{props.name}</div>
    </div>
  );
}
