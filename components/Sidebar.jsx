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
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
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
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
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
    <div className="bg-black bg-opacity-90 fixed text-white top-0 right-0 h-[100vh] w-screen xl:w-[620px] 2xl:w-[780px] desktop:w-[960px] p-5 z-30 flex flex-col">
      <div className="flex flex-row">
        <div className="w-[9rem] 2xl:w-[11rem] desktop:w-[16rem]">
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
              {[
                "/assets/Group 6411.png",
                "/assets/Group 6408.png",
                "/assets/Group 6410.png",
                "/assets/Group 6409.png",
              ].map((imagePath, index) => (
                <div key={index}>
                  <img
                    src={imagePath}
                    alt={`slider-image-${index}`}
                    className="max-md:w-24 max-md:h-24 md:w-28 md:h-28 2xl:w-32 2xl:h-32 desktop:w-44 desktop:h-44 mb-5"
                  />
                </div>
              ))}
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
                alt="middle-large-image"
                className=" my-5 xl:max-2xl:w-[14.5rem] xl:h-[14.5rem] 2xl:h-[18.5rem] desktop:h-[23rem]"
              />
            </div>
            <div className="flex flex-col justify-between items-end text-[12px] md:text-[10px] 2xl:text-[16px] tracking-[2px] max-md:space-y-3">
              <div className="flex gap-10 items-center">
                <img
                  src="/assets/Group 2867.png"
                  alt="user-icon"
                  className="h-4 2xl:h-7"
                />
                <img
                  src="/assets/Group 5511.png"
                  alt="UK-Flag"
                  className="xl:max-2xl:w-7"
                />
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
          <div className="flex items-center gap-10 2xl:gap-16 max-md:pt-4">
            <img
              src="/assets/Group 6422.png"
              alt="image"
              className="xl:max-2xl:w-58 xl:h-32 2xl:max-desktop:h-36 2xl:max-desktop:w-72 desktop:w-full desktop:h-full hidden md:block"
            />
            <img
              src="/assets/Group 6420.png"
              alt="double-image"
              className="h-[6.5rem] 2xl:h-[7rem] desktop:h-[9.6rem]"
            />
          </div>
        </div>
      </div>

      {/* Carousel section */}
      <div className="flex-grow pt-16 md:pt-3">
        <Slider {...carouselSettings}>
          {[
            "/assets/Group 6408.png",
            "/assets/Group 6407.png",
            "/assets/Group 6406.png",
            "/assets/Group 6405.png",
            "/assets/Group 6406.png", // Repeated intentionally, based on your original code
            "/assets/Group 6405.png", // Repeated intentionally, based on your original code
          ].map((imagePath, index) => (
            <div key={index}>
              <img
                src={imagePath}
                alt={`slider-image-${index}`}
                className="max-md:w-24 max-md:h-24 md:w-28 md:h-28 2xl:w-36 2xl:h-36 desktop:w-48 desktop:h-48"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Footer section */}
      <footer className="mt-auto flex justify-between items-center text-[10px] 2xl:text-[13px] tracking-[2px]">
        <div className="flex-1 text-[1px] ">.</div>
        <div className="flex-1 ">
          <p className="text-[12px] 2xl:text-[16px] hidden md:block text-center">
            TERMS | PRIVACY
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src="/assets/Group 6382.png"
            alt="logo"
            className="w-40 2xl:w-60"
          />
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;
