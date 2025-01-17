"use client";

import React, { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";

export default function UploadCard({ currentMedia }) {
  const [fileNames, setFileNames] = useState([]);
  const [position, setPosition] = useState({ x, y }); // Default position
  const [dragging, setDragging] = useState(false);

  // Determine default position based on screen size
  useEffect(() => {
    const updateDefaultPosition = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width >= 2560) {
        // 2xl screens
        setPosition({ x: 230, y: 520 });
      }
      else if (width >= 1920) {
        // 2xl screens
        setPosition({ x: 130, y: 320 });
      } else if (width >= 1536) {
        // xl screens
        setPosition({ x: 110, y: 200 });
      } else if (width >= 1280) {
        // xl screens
        setPosition({ x: 120, y: 120 });
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
    document.getElementById("file-upload").click();
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
        backgroundColor: currentMedia.cardColor || "black",
        color: currentMedia.cardtext || "white",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      className="bg-white text-black w-[240px] md:w-[300px] h-[360px] 2xl:w-[320px] lg:h-[420px] 2xl:h-[489px] rounded-[20px] fixed cursor-pointer"
      onMouseDown={handleMouseDown}
    >
      {/* Top Icon */}
      <div
        className="absolute  no-drag p-3 xl:px-5 xl:py-5 left-[-2px] top-[-2px] cursor-pointer"
        onClick={triggerFileInput}
      >
        <img
          src="/assets/Path 27378.png"
          alt="add-icon"
          className="max-2xl:w-14"
        />
      </div>
      {/* Hidden File Input */}
      <input
        type="file"
        id="file-upload"
        style={{ display: "none" }}
        multiple
        onChange={handleFileUpload}
      />

      <div className="absolute pl-8 pt-4 left-12 xl:left-[70px] 2xl:left-[85px] no-drag tracking-[3px]">
        <div className="flex justify-between w-[200px] 2xl:w-[210px] text-[14px] uppercase">
          <p className="text-[10px] md:text-[13px] 2xl:text-[15px] font-light">
            Upload file
          </p>
          <img
            src="/assets/lock-icon.png"
            alt="lock"
            className="md:w-9 pr-12 md:pr-5"
          />
        </div>
        <p className="text-[22px] md:text-[40px] leading-[3.8rem] tracking-[4px]">
          OR
        </p>
        <div className="absolute right-12 md:right-[1.4rem] 2xl:right-5 text-[10px] md:text-[13px] 2xl:text-[15px] font-light leading-[28px]">
          SELECT A FOLDER
        </div>
      </div>

      <div className="absolute translate-y-[1400%] md:translate-y-[1190%] 2xl:translate-y-[1090%] xl:translate-x-[93%] 2xl:translate-x-[74.5%] translate-x-[98%]">
        <p className="whitespace-nowrap rotate-90 font-bold text-black text-[5px] md:text-[7px] 2xl:text-[9px] tracking-[1px]">
          ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
        </p>
      </div>

      {/* Scrollable Section to Display File Names */}
      <section>
        {fileNames.length > 0 ? (
          <div
            className="absolute top-[125px] lg:top-[180px] 2xl:top-[200px] pl-8 translate-y-[-50%] w-[95%] no-drag scrollbar-hide tracking-[2px] 
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
          <div className="absolute right-[-2.3rem] md:right-[-4.7rem] 2xl:right-[-5.4rem] top-[30%] 2xl:top-[27%] tracking-wider">
            <div className="flex text-[18px] md:text-[36px] 2xl:text-[40px]">
              <p>
                UP TO{" "}
                <span className="text-black ml-1 md:ml-5 2xl:ml-5">1TB</span>
              </p>
            </div>
            <div className="absolute right-12 md:right-24 2xl:right-[6.4rem] text-[10px] md:text-[18px] 2xl:text-[20px] mt-[3px] 2xl:mt-[0px] tracking-[2px]">
              <span>FREE</span>
            </div>
          </div>
        )}
      </section>

      {/* Input Fields */}
      <div className="mt-[200px] lg:mt-[240px] 2xl:mt-[300px] flex flex-col gap-y-6 tracking-widest">
        {/* Title Input */}
        <div className="pl-8 relative pr-6">
          <input
            type="text"
            id="title"
            placeholder="TITLE"
            className="peer w-full h-8 text-[10px] lg:text-[12px] bg-transparent focus:outline-none border-b-2 placeholder-transparent no-drag"
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
          <img
            src="/assets/Group 5526.png"
            alt=""
            className="w-[5px] lg:max-2xl:w-[5px]"
          />
        </button>
      </div>
    </div>
  );
}
