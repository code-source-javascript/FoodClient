import React from "react";
import "./sideNavItem";
export default function SideNavItem(props) {
  return (
    <div className="flex bg-white p-3  border border-gray-200 ">
      <div className="m-0 md:m-2 text-xl">{props.icon}</div>
      <div className="m-0 md:m-2 text-sm font-light ">{props.name}</div>
    </div>
  );
}
