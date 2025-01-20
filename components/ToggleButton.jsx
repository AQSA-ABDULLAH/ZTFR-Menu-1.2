import React from "react";

function ToggleButton({ currentMedia }) {
  return (
    <div
      style={{
        backgroundColor: currentMedia.cardColor || "black",
        color: currentMedia.cardtext || "white", 
      }}
      className="w-[50px] md:w-[60px] lg:w-[157px] h-[290px] md:h-[400px] 2xl:h-[489px] rounded-r-[20px] relative cursor-pointer z-20 tracking-wider md:tracking-[2px]"
    >
      {/* Icon */}
      <div className="absolute top-[10px] md:top-[24px] left-[32px] md:left-[125px]">
        {/* <img src="/assets/lock-icon.png" alt="lock" className="w-2 2xl:w-4" /> */}
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={currentMedia?.cardtext || "white"}
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path
                fillRule="evenodd"
                d="M12 2a5 5 0 00-5 5v4H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 9V7a3 3 0 10-6 0v4h6zm-4 5a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
                clipRule="evenodd"
              />
            </svg>
      </div>

      {/* Upload text */}
      <div className="absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[27px] lg:left-[60px] 2xl:left-[70px]">
        <p className="text-[7px] md:text-[12px] text-center whitespace-nowrap -rotate-90 font-bold">
          UPLOAD FILES OR FOLDERS BY DROPPING <br />
          THEM ANYWHERE IN THIS WINDOW <br />
        </p>
      </div>

      {/* Advanced encryption text */}
      <div className="absolute translate-y-[1450%] md:translate-y-[1400%] 2xl:translate-y-[1200%] 2xl:translate-x-[1%] md:translate-x-[14%] translate-x-[-27%]">
        <p
        style={{
          color: currentMedia.cardColor || "white", // Adjust text color if needed
        }}
         className="whitespace-nowrap rotate-90 font-bold text-black text-[5px] md:text-[7px] 2xl:text-[10px]">
          ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
        </p>
      </div>
    </div>
  );
}

export default ToggleButton;