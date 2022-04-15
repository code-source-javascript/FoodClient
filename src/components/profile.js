import React from "react";
import { FcBusinessman } from "react-icons/fc";

export default function Profile() {
  return (
    <div className="flex ">
      <div className="  text-3xl  border border-gray-300 rounded-full bg-red-300 ">
        <FcBusinessman className="m-auto" />
      </div>
      <div className=" ">
        <div className=" text-xs font-bold">Caleb Okyere</div>
        <div className=" text-xs text-gray-500">View Profile</div>
      </div>
    </div>
  );
}
