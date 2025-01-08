import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const carouselSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const verticalCarouselSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (!isSidebarOpen) {
    return null; 
  }

  return (
    <div className="bg-black bg-opacity-90 fixed text-white top-0 right-0 h-[100vh] w-screen xl:w-[620px] 2xl:w-[960px] p-5 z-30 flex flex-col">
  <div className="flex flex-row">
    <div className="w-[9rem] 2xl:w-[16rem]">
      <div className="flex items-center mb-4 gap-8 tracking-[2px]">
        <img
          src="/assets/Path 27323.png"
          alt="close"
          onClick={() => setIsSidebarOpen(false)}
          className="cursor-pointer w-3 h-3 2xl:w-6 2xl:h-6"
        />
        <p className="text-[12px] 2xl:text-[14px]">MENU</p>
      </div>
      <section className="hidden md:block">
        <Slider {...verticalCarouselSettings}>
          <div>
            <img
              src="/assets/Group 6411.png"
              alt="image"
              className="mb-4 xl:max-2xl:w-28 xl:max-2xl:h-28"
            />
          </div>
          <div>
            <img
              src="/assets/Group 6408.png"
              alt="image"
              className="mb-4 xl:max-2xl:w-28 xl:max-2xl:h-28"
            />
          </div>
          <div>
            <img
              src="/assets/Group 6410.png"
              alt="image"
              className="mb-4 xl:max-2xl:w-28 xl:max-2xl:h-28"
            />
          </div>
          <div>
            <img
              src="/assets/Group 6409.png"
              alt="image"
              className="mb-4 xl:max-2xl:w-28 xl:max-2xl:h-28"
            />
          </div>
        </Slider>
      </section>
    </div>

    <div className="items-end">
      <div className="flex justify-between gap-20">
        <div className="md:flex flex-col items-center justify-center hidden">
          <img
            src="/assets/Group 6113.png"
            alt="logo"
            className="xl:max-2xl:w-44"
          />
          <img
            src="/assets/Group 6421.png"
            alt="image"
            className=" my-5 xl:max-2xl:w-[14.5rem] xl:max-2xl:h-[14.5rem]"
          />
        </div>
        <div className="flex flex-col justify-between items-end text-[12px] md:text-[10px] 2xl:text-[16px] tracking-[2px] max-md:space-y-3">
          <div className="flex gap-10 items-center">
            <img
              src="/assets/Group 2867.png"
              alt="user-icon"
              className="h-4 2xl:h-7"
            />
            <img src="/assets/Group 5511.png" alt="UK-Flag" className="xl:max-2xl:w-7" />
          </div>
          <p>FEATURES</p>
          <p>PRODUCTS</p>
          <p>HOW TO ZTFR</p>
          <p>PRICING</p>
          <p>ADVERTISING</p>
          <p>COMPANY</p>
          <p>CAREERS</p>
          <p>MY ACCOUNT</p>
          <p>NEWSROOM/PRESS</p>
        </div>
      </div>
      <div className="flex items-center gap-10 max-md:pt-4">
        <img
          src="/assets/Group 6422.png"
          alt="image"
          className="xl:max-2xl:w-58 xl:max-2xl:h-32 hidden md:block"
        />
        <img
          src="/assets/Group 6420.png"
          alt="image"
          className="h-[6.5rem] 2xl:h-[10rem]"
        />
      </div>
    </div>
  </div>

  {/* Carousel section */}
  <div className="flex-grow pt-16 md-pt-4">
    <Slider {...carouselSettings}>
      <div>
        <img
          src="/assets/Group 6408.png"
          alt="image"
          className="max-md:w-24 max-md:h-24 max-2xl:w-28 max-2xl:h-28"
        />
      </div>
      <div>
        <img
          src="/assets/Group 6407.png"
          alt="image"
          className="max-md:w-24 max-md:h-24 max-2xl:w-28 max-2xl:h-28"
        />
      </div>
      <div>
        <img
          src="/assets/Group 6406.png"
          alt="image"
          className="max-md:w-24 max-md:h-24 max-2xl:w-28 max-2xl:h-28"
        />
      </div>
      <div>
        <img
          src="/assets/Group 6405.png"
          alt="image"
          className="max-md:w-24 max-md:h-24 max-2xl:w-28 max-2xl:h-28"
        />
      </div>
    </Slider>
  </div>

  {/* Footer section */}
  <footer className="mt-auto flex items-center text-[10px] 2xl:text-[13px] tracking-[2px]">
    <div>
      <p className="text-[12px] 2xl:text-[16px] hidden md:block">TERMS | PRIVACY</p>
    </div>
    <div className="flex-1 flex justify-center md:justify-end">
      <img src="/assets/Group 6382.png" alt="logo" className="w-40 2xl:w-65" />
    </div>
  </footer>
</div>

  );
}

export default Sidebar;
