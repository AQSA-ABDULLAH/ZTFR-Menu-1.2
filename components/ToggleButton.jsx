import React from "react";

function ToggleButton() {
  return (
    <div className="bg-black text-white w-[50px] md:w-[60px] lg:w-[120px] 2xl:w-[157px] h-[330px] md:h-[400px] 2xl:h-[489px] rounded-r-[20px] relative cursor-pointer z-20 tracking-[2px]">
      {/* Icon */}
      <div className="absolute top-[20px] md:top-[57px] lg:top-[30px] left-[35px] md:left-[45px] lg:left-[120px]">
        <img src="/assets/lock-icon.png" alt="lock" className="w-2 2xl:w-4" />
      </div>

      {/* Upload text */}
      <div className="absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[27px] lg:left-[60px] 2xl:left-[70px]">
        <p className="text-[7px] md:text-[10px] 2xl:text-[12px] text-center whitespace-nowrap -rotate-90">
          UPLOAD FILES OR FOLDERS BY DROPPING <br />
          THEM ANYWHERE IN THIS WINDOW <br />
        </p>
      </div>

      {/* Advanced encryption text */}
      <div className="absolute translate-y-[1450%] md:translate-y-[1200%] 2xl:translate-x-[1%] md:translate-x-[-10%] translate-x-[-27%]">
        <p className="whitespace-nowrap rotate-90 font-bold text-black text-[6px] md:text-[10px]">
          ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
        </p>
      </div>
    </div>
  );
}

export default ToggleButton;
