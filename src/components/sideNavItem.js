import React from "react";
import "./sideNavItem";
export default function SideNavItem(props) {
  return (
    <div className=" ">
      <div className="">{props.icon}</div>
      <div className=" ">{props.name}</div>
    </div>
  );
}
