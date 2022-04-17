import React from "react";
import { FcBusinessman } from "react-icons/fc";

export default function Profile() {
  return (
    <div className="w-10 h-10 border rounded-full flex items-center justify-center bg-gray-300 overflow-hidden">
      <img
        src="./images/hum.jpeg"
        alt="profile"
        className="object-cover h-10 w-10 rounded-full "
      />
    </div>
  );
}
