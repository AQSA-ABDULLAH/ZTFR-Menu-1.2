import React from 'react';
import { Draggable } from 'react-draggable';

const MyComponent = () => {
  return (
    <section className="w-[250px] h-[360px] lg:w-[314px] lg:h-[450px] 3xl:h-[489px] rounded-xl z-70">
      <Draggable>
        <div className="w-[250px] h-[360px] lg:w-[314px] lg:h-[450px] 3xl:h-[489px] animate__transition rounded-[20px] absolute top-[50%] left-[150px] lg:left-[240px] translate-x-[-50%] translate-y-[-50%] bg-white">
          <div className="absolute top-[9px] lg:top-[26px] no-drag translate-y-[-50%] translate-x-[-50%] left-[220px] lg:left-[285px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[14px] lg:text-[16px] absolute z-[1100] cursor-pointer animate__transition no-drag"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
            </svg>
          </div>
          <div className="false top-[125px] lg:top-[200px] absolute pl-8 translate-y-[-50%] overflow-y-scroll scrollbar-hide overflow-x-hidden w-[95%] no-drag">
            <div className="h-[70px] lg:h-[110px] space-y-1"></div>
          </div>
          <div className="mt-[190px] lg:mt-[270px] 3xl:mt-[300px] flex flex-col gap-y-6">
            <div className="pl-8 relative animate__transition pr-4">
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="language_tracking peer w-full h-8 text-[10px] lg:text-[12px] bg-transparent focus:outline-none border-b-2 placeholder:!text-transparent placeholder:!opacity-0 no-drag"
                value=""
              />
              <label
                htmlFor="title"
                className="opacity-50 absolute left-8 -top-5 input_text_size transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-[0.4rem] peer-placeholder-shown:input_text_size peer-focus:-top-5 peer-focus:opacity-50 peer-focus:input_text_size"
              >
                TITLE
              </label>
              <span className="absolute top-1/2 -translate-y-1/2 right-4 text-[9px] opacity-50">
                0/30
              </span>
            </div>
            <div className="pl-8 relative animate__transition pr-4">
              <textarea
                id="note"
                type="text"
                placeholder="NOTE"
                className="language_tracking peer cursor-defualt h-14 lg:h-16 opacity-100 p-0 w-full bg-transparent resize-none placeholder-transparent focus:outline-none border-b-2 text-[10px] lg:text-[12px] no-drag scrollbar-hide overflow-y-auto"
              ></textarea>
              <label
                htmlFor="note"
                className="opacity-50 absolute left-8 -top-5 input_text_size transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-2 peer-placeholder-shown:input_text_size peer-focus:-top-5 peer-focus:opacity-50 peer-focus:input_text_size"
              >
                NOTE
              </label>
            </div>
          </div>
          <div className="relative flex items-center justify-center cursor-pointer">
            <button className="absolute left-[220px] lg:left-[285px] top-4 no-drag">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-[30px] mr-4 animate__transition"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </Draggable>
      <div className="relative" role="presentation" tabIndex="0" style={{ filter: 'none' }}>
        <div className="relative h-max left-[26px] lg:left-[84px] no-drag">
          <div className="absolute rounded-tl-xl animate__transition left-[-1px] top-0 h-max w-max">
            <svg
              fill="#FFFFFF"
              className="w-[70px] lg:w-[111px] p-2 animate__transition lg:p-6 cursor-pointer"
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
          <div className="absolute left-[75px] lg:left-[118px] flex flex-col top-[10px] lg:top-[25px]">
            <p className="upload_file_text animate__transition hover:font-bold cursor-pointer">
              UPLOAD FILES
            </p>
            <p className="animate__transition mt-0 text-[20px] lg:text-[40px]">OR</p>
            <button className="animate__transition hover:font-bold select_folder_text select_folder_align_right mt-0 tracking-[2px]">
              SELECT A FOLDER
            </button>
            <input type="file" multiple style={{ display: 'none' }} />
          </div>
          <div className="relative tracking-[1.2px]">
            <div className="animate__transition absolute top-[120px] lg:top-[170px] translate-y-[-50%] Upto_text_size_align_right left-[190px] lg:left-[228px] ">
              <p className="Upto_text_size false whitespace-nowrap text-right mb-2">UP TO</p>
              <p className="free_text_size false text-right">FREE</p>
            </div>
            <div className="top-[108px] lg:top-[160px] left-[285px] flex absolute z-[999] translate-y-[-50%] translate-x-[-50%] lg:translate-x-[-50%] lg:left-[380px] ">
              <p className="text-[20px] lg:text-[40px] whitespace-nowrap animate__transition tracking-[1.2px] mb-2">
                1 TB
              </p>
            </div>
          </div>
          <div className="absolute translate-y-[-50%] mt-[-18px] lg:mt-[20px] translate-x-[-52%] lg:translate-x-[-50%] rotate-90 advance_text_top left-[260px] lg:left-[322px]">
            <p
              className="advance_text_size whitespace-nowrap font-bold animate__transition"
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
            </p>
          </div>
        </div>
        <input multiple type="file" tabIndex="-1" style={{ display: 'none' }} />
      </div>
    </section>
  );
};

export default MyComponent;
