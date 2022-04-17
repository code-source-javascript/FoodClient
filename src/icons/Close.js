import React from "react";

function CloseIcon(props) {
  return (
    <div className="flex" onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 "
        version="1"
        viewBox="0 0 512 512"
      >
        <path
          fill="#aeaeae"
          d="M161 5103C73 5072 0 4967 0 4870c0-20 7-59 16-86 15-45 106-139 1103-1137l1086-1087-1082-1083C529 882 34 380 25 361-20 271 1 148 75 75c69-70 163-91 261-59 45 15 139 106 1136 1103l1088 1086 1088-1086C4645 122 4739 31 4784 16c98-32 192-11 261 59 70 69 91 163 59 261-15 45-106 139-1103 1137L2915 2560l1086 1088c997 997 1088 1091 1103 1136 32 98 11 192-59 261-69 70-163 91-261 59-45-15-139-106-1137-1103L2560 2915 1472 4001C475 4998 381 5089 336 5104c-61 20-117 19-175-1z"
          transform="matrix(.1 0 0 -.1 0 512)"
        ></path>
      </svg>
    </div>
  );
}

export default CloseIcon;
