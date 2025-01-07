import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sidebar() {
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
          slidesToShow: 1,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black fixed text-white top-0 right-0 h-[100vh] w-[960px] p-5">
      <header className="flex justify-between">
        <div className="flex">
          <img src="/assets/Path 27323.png" alt="close" />
          <p>MENU</p>
        </div>
      </header>
      <div className="flex flex-row">
        <div className="w-[16rem]">
          <Slider {...verticalCarouselSettings}>
            <div>
              <img src="/assets/Group 6408.png" alt="image" />
            </div>
            <div>
              <img src="/assets/Group 6407.png" alt="image" />
            </div>
            <div>
              <img src="/assets/Group 6407.png" alt="image" />
            </div>
          </Slider>
        </div>

        <div className="items-end">
          <div className="flex justify-between">
            <div>
              <img src="/assets/Group 6113.png" alt="logo" />
              <img src="/assets/Group 6421.png" alt="image" />
            </div>
            <div className="flex flex-col justify-between items-end">
              <div className="flex">
                <img src="/assets/Group 2867.png" alt="user-icon" />
                <img src="/assets/Group 5511.png" alt="UK-Flag" />
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
          <div className="flex items-center gap-10">
            <img src="/assets/Group 6422.png" alt="image" />
            <img src="/assets/Group 6420.png" alt="image" className="h-[10rem]" />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Slider {...carouselSettings}>
          <div>
            <img src="/assets/Group 6408.png" alt="image" />
          </div>
          <div>
            <img src="/assets/Group 6407.png" alt="image" />
          </div>
          <div>
            <img src="/assets/Group 6406.png" alt="image" />
          </div>
          <div>
            <img src="/assets/Group 6405.png" alt="image" />
          </div>
        </Slider>
      </div>

      <footer className="flex justify-between">
        <p>FOUNDARION</p>
        <p>TERMS | PRIVACY</p>
        <img src="/assets/Group 6382.png" alt="logo" />
      </footer>
    </div>
  );
}

export default Sidebar;