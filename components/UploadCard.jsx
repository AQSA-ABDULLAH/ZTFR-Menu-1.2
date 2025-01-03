export default function UploadCard() {
  return (
    <div className="bg-black text-white w-[250px] h-[360px] lg:w-[314px] lg:h-[450px] desktop:h-[489px] rounded-[20px] absolute top-[50%] left-[150px] lg:left-[240px] translate-x-[-50%] translate-y-[-50%]">
      {/* Top Icon */}
      <div className="absolute bg-white no-drag p-2 left-[-1px] top-[-1px]">
        <img src="/assets/Path 27378.png" alt="add-icon" className="" />
      </div>

      <div className="absolute pl-8 pt-4 left-16 no-drag tracking-[2px]">
        <div className="flex justify-between w-[200px] text-[14px] uppercase">
          <p>Upload file</p>
          <img src="/assets/lock-icon.png" alt="lock" />
        </div>
        <p className="text-[40px]">OR</p>
        <div className="absolute right-0">SELECT A FOLDER</div>
      </div>

      {/* Scrollable Section */}
      <div className="absolute top-[125px] lg:top-[200px] pl-8 translate-y-[-50%] overflow-y-scroll overflow-x-hidden w-[95%] no-drag">
        <div className="h-[70px] lg:h-[110px] space-y-1"></div>
      </div>

      {/* Input Fields */}
      <div className="mt-[190px] lg:mt-[270px] desktop:mt-[300px] flex flex-col gap-y-6">
        {/* Title Input */}
        <div className="pl-8 relative pr-4">
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
        <div className="pl-8 relative animate__transition pr-4">
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
  );
}
