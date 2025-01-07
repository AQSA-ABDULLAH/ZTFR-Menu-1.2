import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sidebar() {
  const carouselSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false, // Removes next and back buttons
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
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false, // Removes next and back buttons
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
    <div className="bg-black fixed text-white top-0 right-0 min-h-screen w-[960px]">
      <header className="flex justify-between px-3 pt-3">
        <div className="flex gap-4">
          <img src="/assets/Path 27323.png" alt="close" />
          <p>MENU</p>
        </div>
        <div>
          <img src="/assets/Group 6113.png" alt="logo" />
        </div>
        <div className="flex gap-4">
          <img src="/assets/Group 2867.png" alt="user-icon" />
          <img src="/assets/Group 5511.png" alt="UK-Flag" />
        </div>
      </header>
      <div className="flex flex-row p-3">
        <div className="p-3 w-[16rem]">
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

        <div>
          <div className="flex p-3 space-x-3">
            <img src="/assets/Group 6421.png" alt="image" />
            <div className="flex flex-col justify-between">
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
          <div className="flex px-3 space-x-6">
            <img src="/assets/Group 6422.png" alt="image" />
            <img src="/assets/Group 6420.png" alt="image" />
          </div>
        </div>
      </div>

      <div className="p-3">
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
    </div>
  );
}

export default Sidebar;


