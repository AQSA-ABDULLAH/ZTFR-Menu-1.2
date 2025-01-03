"use client";

import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import UploadCard from "./UploadCard";

export default function LandingPage() {
  const [showUploadCard, setShowUploadCard] = useState(false);

  const handleToggleClick = () => {
    setShowUploadCard(!showUploadCard);
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-white text-black font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4">
        <div>
          <img src="/assets/ZTFR.png" alt="ztr-logo" className="xl:max-2xl:w-[7rem]" />
        </div>
        <div className="flex items-center gap-4">
          <img src="/assets/user-icon.png" alt="user icon" className="xl:max-2xl:w-[1.2rem]" />
          <img src="/assets/uk-flag.png" alt="UK Flag" className="xl:max-2xl:w-[2.6rem]" />
        </div>
      </header>

      <main className="flex">
        {/* Side Panels */}
        {!showUploadCard && (
          <div onClick={handleToggleClick}>
            <ToggleButton />
          </div>
        )}
        {showUploadCard && <UploadCard />}

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-items-end justify-center items-center tracking-wider">
          <div className="justify-items-end">
            <h1 className="text-[42px] 2xl:text-[62px] tracking-[12px] leading-3">LET'S DO</h1>
            <h2 className="text-[100px] 2xl:text-[190px] tracking-[32px]">THIS</h2>
            <p className="text-[9px] 2xl:text-[12px] tracking-[2px]">
            UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
          </p>
          </div>
        </div>

        <div className="bg-black text-white flex items-center justify-center w-[50px] lg:w-[50px] h-[400px] 2xl:h-[489px] rounded-l-xl">
          <img src="/assets/logo.png" alt="logo" />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-[10px] flex justify-between px-2 pb-2">
        <div>
          <p>© ZITRANSFER 2023</p>
          <div className="flex gap-5">
            <p> All Rights Reserved </p>
            <p>ZITRANSFER IS PART OF THE ZIMO GROUP</p>
          </div>
        </div>
        <div>
          <p>
            ZITRANSFER USER ADVANCE ENCRPTION STANDARD (AES) 256-BIT TO PROTECT
            THE CONFISENTIALITY OF THE DATA YOU UPLOAD
          </p>
        </div>
      </footer>
    </div>
  );
}
