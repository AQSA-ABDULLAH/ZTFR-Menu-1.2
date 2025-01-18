"use client";

import React, { useState, useRef, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import Sidebar from "./Sidebar";
import { media } from "../data/data.json";
import MySVGIcon from "./Logo";
import UserIcon from "./User";
import Card from "./Card";

export default function LandingPage() {
  const [showUploadCard, setShowUploadCard] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const uploadCardRef = useRef(null);
  const [activeMedia, setActiveMedia] = useState(media[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Interval duration state
  const [intervalDuration, setIntervalDuration] = useState(15000); // Default to 5 seconds

  const handleToggleClick = () => {
    setShowUploadCard(!showUploadCard);
  };

  const handleSidebarToggle = () => {
    setShowSidebar(showSidebar);

  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadCardRef.current &&
        !uploadCardRef.current.contains(event.target) &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".sidebar-toggle")
      ) {
        setShowUploadCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentMedia = activeMedia || media[currentIndex];

  useEffect(() => {
    let timer;
    if (media.length > 0) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % media.length;
          setActiveMedia(media[newIndex]); // Sync activeMedia with the new index
          return newIndex;
        });
      }, intervalDuration);
    }

    return () => clearInterval(timer); // Cleanup the interval on unmount or dependency change
  }, [intervalDuration, media.length]);

  const handleImageClick = (image) => {
    setActiveMedia(image); // Update active media when an image is clicked
  };

  return (
    <div className="flex flex-col h-screen justify-between font-sans">
      <section className="relative h-screen flex flex-col justify-between transition-colors duration-1000 bg-center bg-cover">
        {/* Background Media */}
        {currentMedia.type === "image" && currentMedia.src ? (
          <div
            style={{
              backgroundImage: `url(${currentMedia.src})`,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ) : currentMedia.type === "video" && currentMedia.src ? (
          <video
            id="advert-video"
            autoPlay
            playsInline
            muted
            loop
            poster="/assets/black.jpg"
            className="object-cover w-full h-full bg-black absolute top-0 left-0 z-[-1]"
            src={currentMedia.src}
          ></video>
        ) : (
          <div
            style={{
              backgroundColor: currentMedia.backgroundColor || "#FF0000",
            }}
            className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
          ></div>
        )}

        {/* Header Section */}
        <header className="flex justify-between items-center py-8 px-12">
          <div>
            <MySVGIcon currentMedia={currentMedia} />
          </div>
          <div className="flex items-center gap-6">
            <UserIcon currentMedia={currentMedia} />
            <img
              src="/assets/uk-flag.png"
              alt="UK Flag"
              className="max-md:w-[2rem] md:max-2xl:w-[2.4rem]"
            />
          </div>
        </header>

        <main className=" w-[100%] flex justify-between">
            {/* Sidebar */}
          {showSidebar && (
            <div className="absolute left-0 top-0 sidebar">
              <Sidebar
                isSidebarOpen={showSidebar}
                onClose={() => setShowSidebar(false)}
                setActiveMedia={setActiveMedia}
              />
            </div>
          )}
          <section className="flex-1">
            <div className="absolute top-[20%] 2xl:top-[30%]">
              {!showUploadCard && (
                <div onClick={handleToggleClick} className="sidebar-toggle">
                  <ToggleButton currentMedia={currentMedia} />
                </div>
              )}
              {showUploadCard && (
                <div ref={uploadCardRef}>
                  <Card currentMedia={currentMedia} />
                </div>
              )}
            </div>
          </section>
          <section className="flex-1">
            <div className="flex flex-col justify-items-end justify-center tracking-wider">
              <div className="md:justify-items-end justify-items-center">
                <h1
                  style={{ color: currentMedia.textColor }}
                  className="text-[16px] md:text-[42px] desktop:text-[62px] pr-6 tracking-[3px] md:tracking-[12px] leading-3"
                >
                  LET'S DO
                </h1>
                <h2
                  style={{ color: currentMedia.textColor }}
                  className="text-[50px] md:text-[100px] desktop:text-[190px] tracking-[10px] md:tracking-[32px]"
                >
                  THIS
                </h2>
                <p
                  style={{ color: currentMedia.textColor }}
                  className="text-[7px] max-md:w-[76%] text-center md:text-[10px] desktop:text-[12px] tracking-[2px]"
                >
                  UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS
                  WINDOW
                </p>
              </div>
            </div>
          </section>
          <section className="flex-1">
            <div className="absolute right-0">
              <div
                style={{ backgroundColor: currentMedia.cardColor }}
                onClick={handleSidebarToggle} // Updated function here
                className="sidebar-toggle rounded-l-xl text-white flex items-center justify-center w-[28px] h-[150px] md:w-[50px] 2xl:h-[213px] cursor-pointer sm:flex"
              >
                {!showSidebar && (
                  <div>
                    <img
                      src="/assets/logo.png"
                      alt="menu"
                      className="max-md:h-12 mr-1"
                    />
                  </div>
                )}
                {showSidebar && (
                  <div>
                    <img
                      src="/assets/Path 36196.png"
                      alt="menu"
                      className="max-md:h-12 mr-1"
                    />
                  </div>
                )}
              </div>

              {/* Sidebar Component */}
              {showSidebar && <Sidebar />}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          style={{ color: currentMedia.textColor }}
          className="text-[8px] 2xl:text-[10px] flex justify-between px-12 pb-2 tracking-widest"
        >
          <div className="hidden md:block">
            <p>© ZITRANSFER 2023</p>
            <div className="flex gap-4">
              <p>All Rights Reserved</p>
              <p>ZITRANSFER IS PART OF THE ZIMO GROUP</p>
            </div>
          </div>
          <div className="max-md:text-center max-md:pb-4 flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={currentMedia?.textColor || "white"}
              className="w-4 h-4 md:w-2 md:h-2"
            >
              <path
                fillRule="evenodd"
                d="M12 2a5 5 0 00-5 5v4H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 9V7a3 3 0 10-6 0v4h6zm-4 5a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
                clipRule="evenodd"
              />
            </svg>
            <p>
              ZITRANSFER USER ADVANCE ENCRYPTION STANDARD (AES) 256-BIT TO
              PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}






































<main className="flex max-lg:justify-between items-center lg:gap-[18rem] xl:gap-[22rem] 2xl:gap-[26rem] desktop:gap-[36rem] lcd:gap-[56rem] relative">
          {/* Sidebar */}
          {showSidebar && (
            <div className="absolute left-0 top-0 sidebar">
              <Sidebar
                isSidebarOpen={showSidebar}
                onClose={() => setShowSidebar(false)}
                setActiveMedia={setActiveMedia}
              />
            </div>
          )}

          {!showUploadCard && (
            <div onClick={handleToggleClick} className="sidebar-toggle">
              <ToggleButton currentMedia={currentMedia} />
            </div>
          )}
          {showUploadCard && (
            <div ref={uploadCardRef}>
              <Card currentMedia={currentMedia} />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-items-end justify-center tracking-wider">
            <div className="md:justify-items-end justify-items-center">
              <h1
                style={{ color: currentMedia.textColor }}
                className="text-[16px] md:text-[42px] desktop:text-[62px] pr-6 tracking-[3px] md:tracking-[12px] leading-3"
              >
                LET'S DO
              </h1>
              <h2
                style={{ color: currentMedia.textColor }}
                className="text-[50px] md:text-[100px] desktop:text-[190px] tracking-[10px] md:tracking-[32px]"
              >
                THIS
              </h2>
              <p
                style={{ color: currentMedia.textColor }}
                className="text-[7px] max-md:w-[76%] text-center md:text-[10px] desktop:text-[12px] tracking-[2px]"
              >
                UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
              </p>
            </div>
          </div>

          {/* Sidebar Toggle Button */}
          <div
            style={{ backgroundColor: currentMedia.cardColor }}
            onClick={handleSidebarToggle}
            className="sidebar-toggle rounded-l-xl"
          >
            {!showUploadCard && (
              <div className="text-white flex items-center justify-center w-[28px] h-[150px] md:w-[50px] 2xl:h-[213px] cursor-pointer sm:flex">
                <img
                  src="/assets/logo.png"
                  alt="menu"
                  className="max-md:h-12 mr-1"
                />
              </div>
            )}
            {showUploadCard && (
              <div className="text-white flex items-center justify-center w-[28px] h-[150px] md:w-[50px] 2xl:h-[213px] cursor-pointer sm:flex">
                <img
                  src="/assets/Path 36196.png"
                  alt="menu"
                  className="max-md:h-12 mr-1"
                />
              </div>
            )}
          </div>
        </main>