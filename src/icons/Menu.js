import React from "react";

function MenuIcon(props) {
  return (
    <div
      className="flex justify-center items-center border-2 border-gray-500 bg-white h-10 w-10 rounded-md  hover:bg-gray-500"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        version="1"
        viewBox="0 0 512 512"
      >
        <path
          d="M125 4393c-164-86-166-300-3-384 36-19 95-19 2435-19 2313 0 2399 1 2438 19 164 76 166 298 3 382-36 19-95 19-2440 19-2169-1-2406-2-2433-17zM149 2766c-60-21-100-56-125-110-52-112-10-231 100-282l51-24h4770l51 24c113 52 154 174 96 287-29 57-70 92-131 109-24 6-848 10-2406 10-1911-1-2377-3-2406-14zM125 1121C21 1074-28 947 19 845c19-43 78-100 118-116 33-12 4813-12 4846 0 40 16 99 73 118 116 47 102-2 229-106 276-38 18-140 19-2435 19s-2397-1-2435-19z"
          transform="matrix(.1 0 0 -.1 0 512)"
        ></path>
      </svg>
    </div>
  );
}

export default MenuIcon;
