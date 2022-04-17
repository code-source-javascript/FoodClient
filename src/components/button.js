import React from "react";

export default function Button(props) {
  return (
    <button className="" onClick={() => props.onClick}>
      {props.name}
    </button>
  );
}
