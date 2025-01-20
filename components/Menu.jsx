import React from "react";

function Menu({ currentMedia }) {
  return (
    <div className={`flex items-center justify-center`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="94.359"
        viewBox="0 0 20 94.359" // Rotates the SVG by -90 degrees
      >
        <path
          id="Path_36196"
          data-name="Path 36196"
          d="M11.29-.276a5.132,5.132,0,0,1,.338.7q.145.366.283.738.138-.386.29-.738t.345-.71l6.69-12.152a.794.794,0,0,1,.372-.386,1.715,1.715,0,0,1,.552-.069h1.972V6.869H19.787V-7.656q0-.29.014-.621t.041-.676L13.069,3.406a1.064,1.064,0,0,1-.966.621h-.386a1.064,1.064,0,0,1-.966-.621L3.828-8.994q.041.359.062.7t.021.634V6.869H1.566V-12.9H3.538a1.715,1.715,0,0,1,.552.069.794.794,0,0,1,.372.386ZM44.642-12.9v2.179h-9.49v6.566h7.683v2.1H35.152V4.689h9.49V6.869H32.463V-12.9Zm10.745,0a1.2,1.2,0,0,1,.531.09,1.374,1.374,0,0,1,.393.366l11.448,14.9q-.041-.359-.055-.7T67.69,1.1v-14h2.345V6.869H68.683a1.15,1.15,0,0,1-.531-.11,1.341,1.341,0,0,1-.421-.372L56.3-8.5q.028.345.041.676t.014.607V6.869H54.007V-12.9ZM88.063,4.744a5.519,5.519,0,0,0,2.193-.414A4.6,4.6,0,0,0,91.89,3.172a5.067,5.067,0,0,0,1.021-1.779,7.033,7.033,0,0,0,.352-2.276V-12.9h2.662V-.883a9.015,9.015,0,0,1-.545,3.172A7.371,7.371,0,0,1,93.821,4.82,7.127,7.127,0,0,1,91.345,6.5a8.49,8.49,0,0,1-3.283.607A8.49,8.49,0,0,1,84.78,6.5,7.2,7.2,0,0,1,82.3,4.82a7.317,7.317,0,0,1-1.566-2.531,9.015,9.015,0,0,1-.545-3.172V-12.9h2.662v12A7.033,7.033,0,0,0,83.2,1.379a5.067,5.067,0,0,0,1.021,1.779,4.659,4.659,0,0,0,1.641,1.166A5.49,5.49,0,0,0,88.063,4.744Z"
          transform="translate(12.897 95.925)"
          fill={currentMedia?.cardtext || "white"}
        />
      </svg>
    </div>
  );
}

export default Menu;
