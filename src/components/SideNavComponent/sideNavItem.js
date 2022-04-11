import React from "react";
import "./sideNavItem";
export default function SideNavItem(props) {
  return (
    <div className="flex bg-white ml-5 mt-5">
      <div className="m-2 text-xl">{props.icon}</div>
      <div className="m-2 text-sm font-light font-sans">{props.name}</div>
    </div>
  );
}
