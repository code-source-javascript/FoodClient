import React from "react";

export default function Button(props) {
  return (
    <button
      className="text-sm font-sans border-2 w-20 bg-red-600 text-white shadow-md border-r-2"
      onClick={() => props.onClick}
    >
      {props.name}
    </button>
  );
}
