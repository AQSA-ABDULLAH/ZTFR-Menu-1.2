import React from "react";

function Card() {
  return (
    <section
      className="w-[250px] h-[360px] lg:w-[314px] lg:h-[450px] 3xl:h-[489px] rounded-xl z-70 react-draggable"
      style={{
        color: "rgb(0, 0, 0)",
        transform: "translate(0px, 0px)",
        opacity: 1,
      }}
    >
      <div
        className="w-[250px] h-[360px] lg:w-[314px] lg:h-[450px] 3xl:h-[489px] animate__transition rounded-[20px] absolute top-[50%] left-[150px] lg:left-[240px] translate-x-[-50%] translate-y-[-50%] bg__cut__for__plus"
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
      >
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
            style={{ color: "rgb(0, 0, 0)" }}
          >
            <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
          </svg>
        </div>

        <div className="absolute top-[125px] lg:top-[200px] pl-8 translate-y-[-50%] overflow-y-scroll scrollbar-hide overflow-x-hidden w-[95%] no-drag">
          <div className="h-[70px] lg:h-[110px] space-y-1">
            {/* Add your content here */}
          </div>
        </div>

        <div className="mt-[190px] lg:mt-[270px] 3xl:mt-[300px] flex flex-col gap-y-6">
          {/* TITLE Input Field */}
          <div className="pl-8 relative animate__transition pr-4">
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              className="language_tracking peer w-full h-8 text-[10px] lg:text-[12px] bg-transparent focus:outline-none border-b-2 placeholder-transparent no-drag"
              style={{ borderColor: "rgb(0, 0, 0)" }}
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

          {/* NOTE Textarea Field */}
          <div className="pl-8 relative animate__transition pr-4">
            <textarea
              id="note"
              placeholder="NOTE"
              className="language_tracking peer cursor-default h-14 lg:h-16 w-full bg-transparent resize-none placeholder-transparent focus:outline-none border-b-2 text-[10px] lg:text-[12px] no-drag scrollbar-hide overflow-y-auto"
              style={{ borderColor: "rgb(0, 0, 0)" }}
            />
            <label
              htmlFor="note"
              className="opacity-50 absolute left-8 -top-5 input_text_size transition-all peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-2 peer-placeholder-shown:input_text_size peer-focus:-top-5 peer-focus:opacity-50 peer-focus:input_text_size"
            >
              NOTE
            </label>
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
      </div>
    </section>
  );
}

export default Card;

