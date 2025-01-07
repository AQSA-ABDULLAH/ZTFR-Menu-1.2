import React from "react";

function Sidebar() {
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
        <p>IMAGE</p>
      </header>
      <div className="flex flex-row p-3">
        <div className="flex flex-col space-y-3">
          <img src="/assets/Group 6408.png" alt="image" />
          <img src="/assets/Group 6407.png" alt="image" />
          <img src="/assets/Group 6407.png" alt="image" />
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

      <div className="flex p-3 space-x-3">
        <img src="/assets/Group 6408.png" alt="image" />
        <img src="/assets/Group 6407.png" alt="image" />
        <img src="/assets/Group 6406.png" alt="image" />
        <img src="/assets/Group 6405.png" alt="image" />
      </div>
    </div>
  );
}

export default Sidebar;
