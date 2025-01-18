"use client";

import React, { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";

function Card({ currentMedia }) {
  const [fileNames, setFileNames] = useState([]);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Default position
  const [dragging, setDragging] = useState(false);
  const iconColor = currentMedia?.cardColor || "white";

  // Determine default position based on screen size
  useEffect(() => {
    const updateDefaultPosition = () => {
      const width = window.innerWidth;

      if (width >= 2560) {
        // 2xl screens
        setPosition({ x: 130, y: 500 });
      } else if (width >= 1920) {
        // 2xl screens
        setPosition({ x: 130, y: 320 });
      } else if (width >= 1536) {
        // xl screens
        setPosition({ x: 110, y: 200 });
      } else if (width >= 1280) {
        // xl screens
        setPosition({ x: 90, y: 120 });
      } else if (width >= 1024) {
        // lg screens
        setPosition({ x: 200, y: 120 });
      } else {
        // Mobile screens
        setPosition({ x: 26, y: 150 });
      }
    };

    updateDefaultPosition();

    // Listen for screen size changes (responsive behavior)
    window.addEventListener("resize", updateDefaultPosition);
    return () => {
      window.removeEventListener("resize", updateDefaultPosition);
    };
  }, []);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + " MB", // Convert size to MB
      type: file.type || "unknown",
    }));
    setFileNames((prevFileNames) => [...prevFileNames, ...newFiles]);
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById("file-upload");
    if (fileInput) {
      fileInput.click();
    }
  };

  const getLink = () => {
    console.log("Get Link");
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setPosition((prevPosition) => ({
      ...prevPosition,
      startX: e.clientX - prevPosition.x,
      startY: e.clientY - prevPosition.y,
    }));
  };

  const handleMouseMove = (e) => {
      if (!dragging) return;
      setPosition({
        x: e.clientX - position.startX,
        y: e.clientY - position.startY,
      });
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    useEffect(() => {
      if (dragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      } else {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [dragging]);

  return (
    <div
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className="w-[240px] md:w-[300px] 2xl:w-[320px] h-[360px] lg:h-[300px] 2xl:h-[489px] fixed cursor-pointer"
      onMouseDown={handleMouseDown}
    >
      {/* Hidden File Input */}
      <input
        id="file-upload"
        type="file"
        className="hidden"
        multiple
        onChange={handleFileUpload}
      />

      <section
        style={{
          color: currentMedia.cardColor || "white",
        }}
        className="absolute translate-y-[1400%] md:translate-y-[1190%] 2xl:translate-y-[1090%] xl:translate-x-[79.5%] 2xl:translate-x-[74.5%] translate-x-[98%]"
      >
        <p className="whitespace-nowrap rotate-90 font-bold text-[5px] md:text-[8px] 2xl:text-[9px] tracking-[1px]">
          ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
        </p>
      </section>

      <section
        style={{
          backgroundColor: currentMedia.cardColor || "black",
          color: currentMedia.cardtext || "white",
        }}
        className="ml-[80px] md:ml-[100px] w-[160px] md:w-[200px] 2xl:w-[220px] h-[80px] lg:h-[110px] 2xl:h-[130px] rounded-tr-[20px] fixed cursor-pointer"
      >
        <div
          className="absolute left-[-105px] top-[-2px] cursor-pointer"
          onClick={triggerFileInput}
        >
          <svg
            fill={iconColor}
            className="w-[70px] lg:w-[111px] ml-8 md:ml-0 p-3 md:p-2 animate__transition lg:p-6 cursor-pointer"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 67.56 67.55"
          >
            <path
              id="Path_27378"
              data-name="Path 27378"
              d="M67.56,30.02h-30.02V0h-7.51V30.02H0v7.51H30.02v30.02h7.51v-30.02h30.02v-7.51Z"
            ></path>
          </svg>
        </div>

        <div className="pl-2 pt-2 no-drag tracking-[3px]">
          <div className="flex justify-between w-[120px] md:w-[200px] 2xl:w-[210px] text-[14px] uppercase">
            <p className="text-[10px] md:text-[13px] 2xl:text-[15px] font-light">
              Upload file
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 md:w-9 md:pr-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2a5 5 0 00-5 5v4H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 9V7a3 3 0 10-6 0v4h6zm-4 5a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-[22px] md:text-[40px] md:leading-[3.8rem] tracking-[4px]">
            OR
          </p>
          <div className="absolute right-1 md:right-[1rem] 2xl:right-3 text-[10px] md:text-[13px] 2xl:text-[15px] font-light leading-[28px]">
            SELECT A FOLDER
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: currentMedia.cardColor || "black",
          color: currentMedia.cardtext || "white",
        }}
        className="mt-[79px] 2xl:mt-[120px] md:mt-[110px] w-[240px] md:w-[300px] 2xl:w-[320px] h-[290px] lg:h-[320px] 2xl:h-[360px] rounded-b-[20px] fixed cursor-pointer"
      >
        {/* Scrollable Section to Display File Names */}
        <section>
          {fileNames.length > 0 ? (
            <div
              className="absolute pl-8 mt-2 2xl:mt-6 w-[95%] no-drag scrollbar-hide tracking-[2px] 
                    h-[90px] 2xl:h-[120px] overflow-y-scroll"
            >
              {fileNames.map((file, index) => (
                <div key={index} className="flex flex-col text-sm mb-1">
                  {/* File Icon */}
                  <div className="flex items-center leading-3">
                    {file.type.includes("zip") ? (
                      <span className="text-black pr-3">📁</span>
                    ) : (
                      <span></span>
                    )}
                    {/* File Name */}
                    <p className="text-[10px]">{file.name}</p>
                  </div>

                  {/* File Details */}
                  <div className="flex items-center gap-4 opacity-70">
                    <p className="text-[10px]">
                      {file.size} -{" "}
                      <span className="uppercase text-[10px]">{file.type}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="absolute right-[-2.3rem] md:right-[-4.7rem] 2xl:right-[-5.4rem] top-[3%] tracking-wider">
              <div className="flex text-[18px] md:text-[36px] 2xl:text-[40px]">
                <p>
                  UP TO{" "}
                  <span
                    style={{
                      color: currentMedia.cardColor || "white",
                    }}
                    className="text-black ml-1 md:ml-5 2xl:ml-5"
                  >
                    1TB
                  </span>
                </p>
              </div>
              <div className="absolute right-12 md:right-24 2xl:right-[6.4rem] text-[10px] md:text-[18px] 2xl:text-[20px] mt-[3px] 2xl:mt-[0px] tracking-[2px]">
                <span>FREE</span>
              </div>
            </div>
          )}
        </section>

        {/* Input Fields */}
        <div className="mt-[120px] lg:mt-[140px] 2xl:mt-[170px] flex flex-col gap-y-6 tracking-widest">
          {/* Title Input */}
          <div className="pl-8 relative pr-6">
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              className="peer w-full h-8 text-[10px] lg:text-[12px] bg-transparent focus:outline-none placeholder-transparent no-drag"
              style={{
                borderBottom: `2px solid ${currentMedia.cardtext || "white"}`,
              }}
            />

            <label
              htmlFor="title"
              className="opacity-50 absolute left-8 -top-5 text-[10px] lg:text-[12px] transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-[0.4rem] peer-focus:-top-5 peer-focus:opacity-50"
            >
              TITLE
            </label>
          </div>

          {/* Note Input */}
          <div className="pl-8 relative pr-6">
            <textarea
              style={{
                borderBottom: `2px solid ${currentMedia.cardtext || "white"}`,
              }}
              id="note"
              placeholder="NOTE"
              className="peer h-14 lg:h-16 w-full bg-transparent resize-none placeholder-transparent focus:outline-none border-b-2 text-[10px] lg:text-[12px] no-drag scrollbar-hide overflow-y-auto"
            ></textarea>
            <label
              htmlFor="note"
              className="opacity-50 absolute left-8 -top-5 text-[10px] lg:text-[12px] transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-[0.4rem] peer-focus:-top-5 peer-focus:opacity-50"
            >
              NOTE
            </label>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="relative flex justify-center items-center cursor-pointer">
          {fileNames.length > 0 && (
            <div className=" flex gap-3 items-center mt-3">
              <FiUpload className="text-xl 2xl:text-2xl" />

              <button
                className="text-[17px] 2xl:text-[20px] uppercase tracking-[2px]"
                onClick={getLink}
              >
                Get Link
              </button>
            </div>
          )}
          <button className="absolute right-6 2xl:left-[285px] top-4 no-drag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={currentMedia?.cardtext || "white"}
              className="w-6 h-6"
            >
              <circle cx="12" cy="4" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="20" r="2" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Card;
