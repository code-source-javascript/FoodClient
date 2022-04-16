import React from "react";

export default function PromotionItem(props) {
  return (
    <div className="">
      <div className="group relative">
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={props.image}
            alt={props.imageAlt}
            className="w-full sm:h-60 object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
        <div className="h-8 bg-red-500 flex w-16 justify-center items-center text-white shadow text-sm absolute top-3 left-0">
          23%
        </div>
      </div>
    </div>
  );
}
