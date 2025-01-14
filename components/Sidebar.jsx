import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { media } from "../data/data.json";
import "../app/globals.css";

function Sidebar({ isSidebarOpen, onClose, setActiveMedia }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image) => {
    setActiveMedia(image); // Update active media when an image is clicked
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsAnimating(true); // Start the animation when sidebar closes
    } else {
      setIsAnimating(false); // Stop the animation when sidebar opens
    }
  }, [isSidebarOpen]);

  const handleClose = () => {
    setIsAnimating(true); // Start the animation when close button is clicked
    setTimeout(() => {
      onClose(); // Close sidebar after animation ends
    }, 300); // Match the duration of the animation (0.3s)
  };

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

  return (
    <div
      className={`bg-black bg-opacity-90 fixed text-white top-0 right-0 h-screen w-screen xl:w-[620px] 2xl:w-[780px] desktop:w-[960px] p-5 z-30 flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarOpen
          ? isAnimating
            ? "translate-x-full opacity-0 animate-slideOut"
            : "translate-x-0 opacity-100 animate-slideIn"
          : "translate-x-full opacity-0 animate-slideOut"
      }`}
    >
      <div className="flex flex-row">
        <div className="w-[9rem] 2xl:w-[11rem] desktop:w-[16rem]">
          <div className="flex items-center mb-4 gap-8 tracking-[2px]">
            <img
              src="/assets/Path 27323.png"
              alt="close"
              onClick={handleClose}
              className="cursor-pointer w-3 h-3 2xl:w-6 2xl:h-6"
            />
            <p className="text-[12px] 2xl:text-[14px]">MENU</p>
          </div>
          <section className="hidden md:block">
            <Slider {...verticalCarouselSettings}>
              {media
                ?.filter((item) => item.type === "image")
                .map((item, index) => (
                  <div key={index} className="md:py-2 2xl:py-4">
                    <img
                      src={item.src}
                      alt={`slider-image-${index}`}
                      className="max-md:w-24 max-md:h-24 md:w-28 md:h-24 2xl:w-32 2xl:h-32 desktop:w-52 desktop:h-48 rounded-[12px]"
                      style={{
                        backgroundColor: item.backgroundColor || "transparent",
                      }}
                    />
                  </div>
                ))}
            </Slider>
          </section>
        </div>

        <div className="items-end">
          <div className="flex justify-between gap-20 max-md:ml-10 max-md:mt-[-2rem]">
            <div className="md:flex flex-col items-center justify-center hidden">
              <img
                src="/assets/Group 6113.png"
                alt="ZIT logo"
                className="xl:max-2xl:w-44 2xl:my-2 desktop:my-8"
              />
              <img
                src="/assets/Group 6421.png"
                alt="middle-large-image"
                className=" my-5 xl:h-[14.5rem] 2xl:h-[18.5rem] desktop:h-[25rem]"
              />
            </div>
            <div className="mt-8 flex flex-col justify-between items-end text-[12px] md:text-[10px] 2xl:text-[16px] tracking-[2px] max-md:space-y-3">
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
              className="h-[6.5rem] 2xl:h-[7rem] desktop:h-[9rem]"
            />
          </div>
        </div>
      </div>

      {/* Carousel section */}
      <div className="flex-grow pt-16 md:pt-5 2xl:pt-[40px]">
      <Slider {...carouselSettings}>
      {media
        ?.filter((item) => item.type === "image")
        .map((item, index) => (
          <div key={index} className="px-4">
            <img
              src={item.src}
              alt={`slider-image-${index}`}
              className="max-md:w-24 max-md:h-24 md:w-28 md:h-24 2xl:w-36 2xl:h-36 desktop:w-56 desktop:h-44 rounded-[8px]"
              style={{
                backgroundColor: item.backgroundColor || "transparent",
              }}
              onClick={() => handleImageClick(item)} // Set the clicked image as the active one
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
        <div className="md:flex-1 flex justify-end">
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
