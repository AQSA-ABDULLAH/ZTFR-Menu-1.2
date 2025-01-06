"use client";

import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import UploadCard from "./UploadCard";
import Sidebar from "./Sidebar";

export default function LandingPage() {
  const [showUploadCard, setShowUploadCard] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for the sidebar

  const handleToggleClick = () => {
    setShowUploadCard(!showUploadCard);
  };

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
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

      <main className="flex gap-[22rem] 2xl:gap-[30rem] desktop:gap-[38rem] relative">
        {/* Sidebar */}
        {showSidebar && (
          <div className="absolute left-0 top-0 z-50 w-[300px]">
            <Sidebar />
          </div>
        )}

        {/* Side Panels */}
        <div className="justify-center">
        {!showUploadCard && (
          <div onClick={handleToggleClick}>
            <ToggleButton />
          </div>
        )}
        {showUploadCard && <UploadCard />}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-items-end justify-center tracking-wider">
          <div className="justify-items-end">
            <h1 className="text-[42px] desktop:text-[62px] tracking-[12px] leading-3">LET'S DO</h1>
            <h2 className="text-[100px] desktop:text-[190px] tracking-[32px]">THIS</h2>
            <p className="text-[9px] desktop:text-[12px] tracking-[2px]">
              UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
            </p>
          </div>
        </div>

        {/* Sidebar Toggle Button */}
        <div
          className="bg-black text-white flex items-center justify-center w-[50px] lg:w-[50px] h-[400px] 2xl:h-[489px] rounded-l-xl cursor-pointer"
          onClick={handleSidebarToggle} // Add click handler
        >
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
            ZITRANSFER USER ADVANCE ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT
            THE CONFIDENTIALITY OF THE DATA YOU UPLOAD
          </p>
        </div>
      </footer>
    </div>
  );
}

