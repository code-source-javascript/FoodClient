import React from "react";

export default function Button(props) {
  return (
    <button
      className="text-xs p-1 rounded-full bg-red-400 text-white shadow-md "
      onClick={() => props.onClick}
    >
      {props.name}
    </button>
  );
}
