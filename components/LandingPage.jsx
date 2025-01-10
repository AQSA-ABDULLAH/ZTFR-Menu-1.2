"use client";

import React, { useState, useRef, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import UploadCard from "./UploadCard";
import Sidebar from "./Sidebar";

export default function LandingPage() {
  const [showUploadCard, setShowUploadCard] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for the sidebar
  const uploadCardRef = useRef(null); // Reference for the UploadCard

  const handleToggleClick = () => {
    setShowUploadCard(!showUploadCard);
  };

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadCardRef.current &&
        !uploadCardRef.current.contains(event.target) &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".sidebar-toggle")
      ) {
        setShowUploadCard(false); // Close UploadCard
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between bg-white text-black font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center py-8 px-12">
        <div>
          <img
            src="/assets/ZTFR.png"
            alt="ztr-logo"
            className="max-md:w-[3rem] md:max-2xl:w-[6rem]"
          />
        </div>
        <div className="flex items-center gap-6">
          <img
            src="/assets/user-icon.png"
            alt="user icon"
            className="max-md:w-[0.9rem] md:max-2xl:w-[1rem]"
          />
          <img
            src="/assets/uk-flag.png"
            alt="UK Flag"
            className="max-md:w-[2rem] md:max-2xl:w-[2.4rem]"
          />
        </div>
      </header>

      <main className="flex max-lg:justify-between items-center lg:gap-[18rem] xl:gap-[22rem] 2xl:gap-[30rem] desktop:gap-[36rem] relative">
        {/* Sidebar */}
        {showSidebar && (
          <div className="absolute left-0 top-0 sidebar">
            <Sidebar
              isSidebarOpen={showSidebar}
              onClose={() => setShowSidebar(false)}
            />
          </div>
        )}

        {/* Side Panels */}
        {!showUploadCard && (
          <div onClick={handleToggleClick} className="sidebar-toggle">
            <ToggleButton />
          </div>
        )}
        {showUploadCard && (
          <div ref={uploadCardRef}>
            <p className="md:hidden text-[1px]">t</p>
            <UploadCard />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-items-end justify-center tracking-wider">
          <div className="md:justify-items-end justify-items-center">
            <h1 className="text-[16px] md:text-[42px] desktop:text-[62px] pr-6 tracking-[3px] md:tracking-[12px] leading-3">
              LET'S DO
            </h1>
            <h2 className="text-[50px] md:text-[100px] desktop:text-[190px] tracking-[10px] md:tracking-[32px]">
              THIS
            </h2>
            <p className="text-[8px] max-md:w-[80%] text-center md:text-[10px] desktop:text-[12px] tracking-[2px]">
              UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
            </p>
          </div>
        </div>

        {/* Sidebar Toggle Button */}
        <div onClick={handleSidebarToggle} className="sidebar-toggle">
          {!showUploadCard && (
            <div className="bg-black text-white flex items-center justify-center w-[26px] h-[150px] md:w-[50px] 2xl:h-[213px] rounded-l-xl cursor-pointer sm:flex">
              <img src="/assets/logo.png" alt="logo" className="max-md:h-12" />
            </div>
          )}
          {showUploadCard && (
            <div className="bg-black text-white flex items-center justify-center w-[26px] h-[150px] md:w-[50px] 2xl:h-[213px] rounded-l-xl cursor-pointer sm:flex">
              <img
                src="/assets/Path 36196.png"
                alt="menu"
                className="max-md:h-12"
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-[10px] flex justify-between px-12 pb-2">
        <div className="hidden md:block">
          <p>© ZITRANSFER 2023</p>
          <div className="flex gap-4">
            <p>All Rights Reserved</p>
            <p>ZITRANSFER IS PART OF THE ZIMO GROUP</p>
          </div>
        </div>
        <div className="max-md:text-center max-md:pb-4 flex gap-1 items-center">
          <img
            src="/assets/Path 27216.png"
            alt="lock"
            className="md:w-2 md:h-2 2xl:w-3 2xl:h-3"
          />
          <p>
            ZITRANSFER USER ADVANCE ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT
            THE CONFIDENTIALITY OF THE DATA YOU UPLOAD
          </p>
        </div>
      </footer>
    </div>
  );
}
