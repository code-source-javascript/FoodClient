import React from "react";
import "./sideNavItem";
export default function SideNavItem(props) {
  return (
    <div className="flex bg-white p-3   hover:bg-red-400">
      <div className="m-1 md:m-2 text-xl">{props.icon}</div>
      <div className="m-1 md:m-2 text-sm font-light ">{props.name}</div>
    </div>
  );
}
