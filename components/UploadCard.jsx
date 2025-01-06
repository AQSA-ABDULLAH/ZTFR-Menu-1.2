"use client";

import React, { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";

export default function UploadCard() {
  const [fileNames, setFileNames] = useState([]);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Default position
  const [dragging, setDragging] = useState(false); // State for dragging

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files); // Get selected files
    setFileNames((prevFileNames) => [
      ...prevFileNames,
      ...files.map((file) => file.name),
    ]); // Append new file names to the existing list
  };

  const triggerFileInput = () => {
    document.getElementById("file-upload").click(); // Programmatically trigger file input
  };

  const getLink = () => {
    console.log("Get Link");
  };

  // Handle Mouse Down
  const handleMouseDown = (e) => {
    setDragging(true);
    setPosition((prevPosition) => ({
      ...prevPosition,
      startX: e.clientX - prevPosition.x,
      startY: e.clientY - prevPosition.y,
    }));
  };

  // Handle Mouse Move
  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - position.startX,
      y: e.clientY - position.startY,
    });
  };

  // Stop Dragging
  const handleMouseUp = () => {
    setDragging(false);
  };

  // Add global event listeners for drag
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
      className="bg-black text-white w-[280px] h-[360px] 2xl:w-[314px] lg:h-[450px] 2xl:h-[489px] rounded-[20px] fixed cursor-pointer"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      onMouseDown={handleMouseDown} // Start dragging
    >
      {/* Top Icon */}
      <div
        className="absolute bg-white no-drag p-2 left-[-1px] top-[-1px] cursor-pointer"
        onClick={triggerFileInput}
      >
        <img
          src="/assets/Path 27378.png"
          alt="add-icon"
          className="max-2xl:w-16"
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

      <div className="absolute pl-8 pt-4 left-16 no-drag tracking-[2px]">
        <div className="flex justify-between w-[200px] text-[14px] uppercase">
          <p className="text-[13px] 2xl:text-[15px]">Upload file</p>
          <img src="/assets/lock-icon.png" alt="lock" className="w-11 pr-7" />
        </div>
        <p className="text-[35px] 2xl:text-[40px]">OR</p>
        <div className="absolute right-7 text-[13px] 2xl:text-[15px]">
          SELECT A FOLDER
        </div>
      </div>

      <div className="absolute translate-y-[1200%] 2xl:translate-x-[1%] translate-x-[38%]">
        <p className="whitespace-nowrap rotate-90 font-bold text-black text-[10px] tracking-[2px]">
          ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
        </p>
      </div>

      {/* Scrollable Section to Display File Names */}
      <section>
  
    {fileNames.length > 0 ? (
      fileNames.map((fileName, index) => (
        <div className="absolute top-[125px] lg:top-[176px] pl-8 h-[180px] translate-y-[-50%] overflow-y-scroll overflow-x-hidden w-[95%] no-drag scrollbar-hide">
        <p key={index} className="text-sm text-white">{fileName}</p>
        </div>
      ))
    ) : (
      <div className="absolute right-[-5rem] top-[30%]">
        <div className="flex text-[40px]">
          <p>UP TO  <span className="text-black ml-3">1TB</span></p>
        </div>
        <div className="absolute right-24 text-[20px] mt-[10px]">
          <span>FREE</span>
        </div>
      </div>
    )}
</section>

    

      {/* Input Fields */}
      <div className="mt-[190px] lg:mt-[270px] desktop:mt-[300px] flex flex-col gap-y-6">
        {/* Title Input */}
        <div className="pl-4 relative pr-4">
          <input
            type="text"
            id="title"
            placeholder="TITLE"
            className="w-full h-8 text-[10px] lg:text-[12px] bg-transparent focus:outline-none border-b-2 placeholder:!text-transparent placeholder:!opacity-0 no-drag"
          />
          <label
            htmlFor="title"
            className="opacity-50 absolute left-8 -top-5 input_text_size transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-[0.4rem] peer-placeholder-shown:input_text_size peer-focus:-top-5 peer-focus:opacity-50 peer-focus:input_text_size"
          >
            TITLE
          </label>
        </div>

        {/* Note Input */}
        <div className="pl-4 relative pr-4">
          <textarea
            id="note"
            placeholder="NOTE"
            className="h-14 lg:h-16 opacity-100 p-0 w-full bg-transparent resize-none placeholder-transparent focus:outline-none border-b-2 text-[10px] lg:text-[12px] no-drag scrollbar-hide overflow-y-auto"
          ></textarea>
          <label
            htmlFor="note"
            className="opacity-50 absolute left-8 -top-5 input_text_size transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-2 peer-placeholder-shown:input_text_size peer-focus:-top-5 peer-focus:opacity-50 peer-focus:input_text_size"
          >
            NOTE
          </label>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="relative flex justify-center cursor-pointer">
        {fileNames.length > 0 && (
          <div className=" flex gap-3 items-center mt-2">
            <FiUpload className="text-3xl" />

            <button className="text-[30px] uppercase" onClick={getLink}>
              Get Link
            </button>
          </div>
        )}
        <button className="absolute right-5 2xl:left-[285px] top-4 no-drag">
          <img
            src="/assets/Group 5526.png"
            alt=""
            className="lg:max-2xl:w-[6px]"
          />
        </button>
      </div>
    </div>
  );
}
