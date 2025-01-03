"use client"; // To enable client-side hooks

import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function UploadCard() {
  const [fileNames, setFileNames] = useState([]);

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

  return (
    <div className="bg-black text-white w-[280px] h-[360px] 2xl:w-[314px] lg:h-[450px] 2xl:h-[489px] rounded-[20px] absolute top-[50%] left-[150px] lg:left-[240px] translate-x-[-50%] translate-y-[-50%]">
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

      {/* Scrollable Section to Display File Names */}
      <div className="absolute top-[125px] lg:top-[200px] pl-8 translate-y-[-50%] overflow-y-scroll overflow-x-hidden w-[95%] no-drag">
        {fileNames.length > 0 ? (
          fileNames.map((fileName, index) => (
            <p key={index} className="text-sm text-white">
              {fileName}
            </p>
          ))
        ) : (
          <div className="text-sm text-gray-500">No files selected</div>
        )}
      </div>

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
