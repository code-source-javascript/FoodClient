import React from "react";

export default function Inspiration() {
  return (
    <div>
      <div className="grid grid-cols-3 h-28 w-96 shadow m-5 ">
        <div className="col-span-1 object-cover rounded shadow overflow-hidden  ">
          <img src="./images/315.jpeg" className="h-28 rounded" alt="#" />
        </div>
        <div className="col-span-2  flex flex-col items-start justify-center pl-8 ">
          <div className="font-bold text-xl m-1">Yam And Stew</div>
          <div className="text-xs font-bold text-gray-500 pl-4">
            Kpakpa Local Foods
          </div>
          <div className="m-1 pl-3 ">GHS 35</div>
        </div>
      </div>
    </div>
  );
}
