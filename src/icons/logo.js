import React from "react";

function LogoIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 md:w-12 md:h-12"
      version="1"
      viewBox="0 0 512 512"
    >
      <path
        fill={props.color}
        d="M2124 5104c-17-8-86-71-154-139l-123-125 6-48 6-49-67-66c-51-51-70-64-82-57-8 5-28 10-45 10-25 0-66-37-293-262-145-145-270-275-278-290-17-33-18-95-1-126 34-61 217-167 353-203 111-31 306-31 416-1 282 77 509 302 585 582 25 92 25 329 0 420-23 86-84 212-136 280-64 85-120 107-187 74zM3354 5104c-16-8-37-27-46-42s-48-147-87-293c-67-249-70-269-59-305 15-45 67-84 111-84 30 0 495 120 550 142 31 12 61 50 70 89 9 35-26 168-60 232-62 115-207 228-338 262-73 19-102 19-141-1zm151-165c98-37 206-158 230-259 6-25 5-26-202-81-114-31-209-55-210-54-2 1 25 106 98 378 5 20 14 37 19 37s34-9 65-21z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        fill={props.color}
        d="M2704 4456c-66-29-190-233-234-386-36-123-38-385-4-473 3-8-9-18-31-26-40-14-143-105-164-145-8-14-17-26-20-26-4 0-31 19-61 41-67 51-175 103-255 124-84 21-209 19-286-5l-63-19-46 29c-153 98-353 134-533 94-40-9-115-36-167-61-79-38-108-59-180-132-152-151-217-319-208-534 6-132 34-226 100-337 39-65 157-193 200-216 16-9 16-13-3-74-25-78-21-166 11-237 11-25 20-47 20-49s-45-4-100-4c-112 0-150-11-192-56-54-59-59-113-29-319C563 948 989 372 1630 61l115-56h1550l75 34c278 124 554 333 748 566 277 331 457 772 479 1165 7 137-5 175-70 218-36 24-53 28-146 32-85 4-106 8-109 21-2 11 12 19 49 28 148 38 296 154 337 264 44 116 19 227-71 320-29 29-64 62-79 73l-27 19 44 58c91 119 138 256 138 397 0 159-63 286-183 368l-65 44-7 62c-10 84-55 218-89 266-24 34-35 40-64 40-41 0-75-29-75-64 0-13 13-52 29-87 27-61 57-166 50-174-2-2-26-5-53-6l-49-3-13 52c-53 206-228 342-441 342-118 0-198-28-296-104l-39-29-36 36-36 36 39 35c55 49 187 112 263 127 89 17 203 7 292-26 106-39 134-41 159-16 26 26 28 82 3 104-10 9-42 27-72 40-240 106-535 60-743-115l-49-41-181 181c-207 206-229 220-303 188zm1104-581c96-40 157-108 186-205 9-29 16-55 16-57s-24-14-52-27c-29-13-77-40-107-60-29-20-56-36-60-36-3 0-75 69-160 154l-153 153 38 31c21 18 56 38 79 46 54 20 167 20 213 1zm-2536-356c29-6 83-24 120-41l66-30-30-43-30-43-55 24c-269 119-584-53-634-348-28-171 62-369 209-455 24-14 40-29 35-33-4-4-26-19-47-33-38-25-40-26-69-9-48 28-145 141-177 206-140 288-28 617 258 760 102 51 239 69 354 45zm2244-25c47-22 98-82 138-162 19-38 42-72 51-76 43-16 67-5 136 61 135 131 245 178 399 171 76-4 95-8 136-34 94-58 138-142 136-264-2-132-56-247-175-369-98-101-92-135 36-197 71-34 143-108 152-157 21-110-104-220-296-263-108-24-126-32-140-66-11-26-9-36 9-74 15-30 18-44 9-44-6 0-119 107-249 237l-238 238 225 225c124 124 225 233 225 243 0 29-22 65-47 76-13 6-31 11-40 11-10 0-119-101-243-225l-225-225-175 176c-96 96-187 182-202 190-47 25-103 18-143-18-42-36-99-118-140-198l-28-55-15 50c-7 28-15 93-15 145-2 82 1 102 22 144 19 39 33 52 69 68 53 24 102 19 181-17 65-31 73-31 106-2 20 16 30 40 41 96 32 156 98 271 176 310 51 25 79 26 124 5zm-2225-251c47-24 54-32 54-57 0-28-3-30-61-42-171-35-277-160-292-345l-7-82-32 27c-18 15-47 56-64 92-59 119-37 256 56 349 59 58 126 85 216 85 63 0 85-5 130-27zm80-285c16-61 71-166 118-225l40-51-54-42c-59-45-116-124-135-184-18-57-8-152 23-211 41-81 130-160 230-205l42-20H970l-35 48c-44 61-61 131-46 190 22 80 114 158 216 183 28 6 60 21 73 33 29 25 26 57-12 161-57 156-9 309 109 350 69 24 83 20 96-27zm1843-372c-88-160-82-362 16-518l29-48h-89c-78 0-90 2-90 17 0 75-71 253-134 335l-36 47 16 78c17 85 67 201 117 275l32 48 87-87 86-86-34-61zm400-305c191-191 244-250 231-255-9-3-91-6-181-6-185 0-194 2-261 72-86 89-122 228-88 344 19 65 32 94 43 94 4 0 119-112 256-249zm-1100 213c204-53 365-226 411-441l7-33h-110l-7 38c-21 110-136 253-247 305-252 119-554-16-634-283l-18-60h-104l14 61c58 249 283 428 538 429 49 0 116-7 150-16zm1930-714c-1-47-7-118-13-157l-13-73h-366c-392-1-391-1-411-51-11-30 8-83 34-93 9-3 171-6 360-6h343l-13-42c-97-321-327-667-590-886-130-109-245-184-395-259l-125-63-740 2-740 3-114 58c-212 108-361 218-527 388-200 207-341 432-433 693-17 48-31 92-31 97s534 9 1349 9c742 0 1357 3 1366 6 26 10 45 63 34 93-21 53 58 50-1416 51-824 0-1374 4-1378 9-10 17-38 278-32 295 6 15 152 16 1929 14l1923-3-1-85z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default LogoIcon;
