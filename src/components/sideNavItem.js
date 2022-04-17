import React from "react";
import "./sideNavItem";
export default function SideNavItem(props) {
  return (
    <div className="flex py-2 mb-10 items-center hover:bg-primary  hover:text-white rounded-r mr-3 opacity-75 transition ease-in duration-400 cursor-pointer">
      <div className="ml-4">{props.icon}</div>
      <div className="ml-5">{props.name}</div>
    </div>
  );
}
