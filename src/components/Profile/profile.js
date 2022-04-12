import React from "react";
import { FcBusinessman } from "react-icons/fc";

export default function Profile() {
  return (
    <button className="flex ">
      <div className="  text-3xl  border-2 border-gray-800 mr-2 mb-2 rounded-full bg-red-300 ">
        <FcBusinessman className="m-auto" />
      </div>
      <div className=" ">
        <div className="font-mono text-xs">Caleb Okyere</div>
        <div className="font-sans text-xs text-gray-500">View Profile</div>
      </div>
    </button>
  );
}
