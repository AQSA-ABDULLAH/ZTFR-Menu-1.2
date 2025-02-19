"use client";

import React from "react";

const MySVGIcon = ({ currentMedia, size = "w-[88px] desktop:w-[147px]" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 135.16 45.92"
      className={`z-40 cursor-pointer ${size}`}
    >
      <path
        d="M34.01,0V1.14c0,.45-.15,.9-.45,1.33L4.41,43.16h29.34v2.76H0v-1.2c0-.41,.13-.8,.39-1.17L29.6,2.76H.84V0H34.01Z"
        fill={currentMedia?.cardColor || "white"} // Use fill for the path color
      ></path>
      <path
        d="M74.33,0V2.82h-16.13V45.92h-3.31V2.82h-16.23V0h35.67Z"
        fill={currentMedia?.cardColor || "white"}
      ></path>
      <g fill={currentMedia?.cardColor || "white"}>
        <rect x="78.98" y="22.07" width="20.26" height="2.76"></rect>
        <rect x="78.98" width="23.51" height="2.76"></rect>
      </g>
      <path
        d="M119.36,26.06c-.41-.54-.88-.97-1.4-1.3,2.01-.22,3.82-.68,5.42-1.38,1.6-.7,2.97-1.6,4.11-2.69,1.14-1.09,2.01-2.36,2.61-3.81,.6-1.45,.91-3.05,.91-4.8,0-3.96-1.31-6.96-3.93-9.01-2.62-2.04-6.58-3.07-11.88-3.07h-8.07V2.63h8.07c4.09,0,7.2,.79,9.35,2.37,2.14,1.58,3.21,4,3.21,7.27,0,1.6-.29,3.04-.88,4.32-.58,1.28-1.43,2.37-2.55,3.28s-2.48,1.61-4.09,2.09-3.43,.73-5.47,.73h-7.65v2.47h5.67c.89,0,1.54,.1,1.96,.29,.42,.19,.82,.53,1.18,1.01l14.7,18.63c.24,.3,.48,.52,.73,.65,.25,.13,.55,.19,.89,.19h2.89l-15.8-19.86Z"
        fill={currentMedia?.cardColor || "white"}
      ></path>
    </svg>
  );
};

export default MySVGIcon;