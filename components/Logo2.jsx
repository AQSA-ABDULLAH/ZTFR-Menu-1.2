import React from "react";

function Logo2({currentMedia, size = "w-[88px] desktop:w-[147px]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="22.883"
      viewBox="0 0 90 22.883"
      className={size}
    >
      <defs>
        <clipPath id="clip-path">
          <rect width="90" height="22.883" fill="#fff" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path)">
        <path
          d="M27.829,18.988v-.479a7.684,7.684,0,0,0-.479-2.264,32.151,32.151,0,0,0-2.178-3.877c-1.4-2.435-2.985-5.252-4.4-7.709C19.609,2.637,18.526.039,15.634,0c-3-.044-4,2.61-5.1,4.528C7.077,10.616,0,22.865,0,22.865H3.267s6.75-11.948,10.1-17.987c.429-.772,1.28-1.788,2.264-1.788,1.5,0,2.248,1.781,2.918,3.007,1.8,3.277,3.537,6.414,5.226,9.582.533.994,1.61,2.305.873,3.658-.483.883-1.454.826-2.832.826,0,.025-13.326,0-13.326,0v2.7H20.6a28.669,28.669,0,0,0,4.007-.13,4.042,4.042,0,0,0,3.223-3.747"
          fill={currentMedia?.cardtext || "white"}
        />
        <path
          d="M7.221,3.893v.479A7.683,7.683,0,0,0,7.7,6.636a32.15,32.15,0,0,0,2.178,3.877c1.4,2.438,2.985,5.252,4.4,7.709,1.165,2.023,2.248,4.62,5.14,4.658,3,.044,4-2.61,5.1-4.528C27.973,12.266,35.05.017,35.05.017H31.783S25.033,11.964,21.68,18c-.429.772-1.28,1.788-2.264,1.788-1.5,0-2.248-1.781-2.918-3.007-1.8-3.277-3.537-6.414-5.226-9.582-.533-.994-1.61-2.305-.873-3.658.483-.883,1.454-.826,2.832-.826,0-.025,13.326,0,13.326,0V.017H14.451a28.67,28.67,0,0,0-4.007.13A4.042,4.042,0,0,0,7.221,3.893"
          transform="translate(15.706 0)"
          fill={currentMedia?.cardtext || "white"}
        />
        <path
          d="M40.189,18.988v-.479a7.683,7.683,0,0,0-.479-2.264,32.151,32.151,0,0,0-2.178-3.877c-1.4-2.435-2.985-5.252-4.4-7.709C31.969,2.637,30.886.039,27.994,0c-3-.044-4,2.61-5.1,4.528C19.437,10.616,12.36,22.865,12.36,22.865h3.267s6.75-11.948,10.1-17.987c.429-.772,1.28-1.788,2.264-1.788,1.5,0,2.248,1.781,2.918,3.007,1.8,3.277,3.537,6.414,5.226,9.582.533.994,1.61,2.305.873,3.658-.483.883-1.454.826-2.832.826,0,.025-13.326,0-13.326,0v2.7H32.96a28.669,28.669,0,0,0,4.007-.13,4.042,4.042,0,0,0,3.223-3.747"
          transform="translate(26.884 0.003)"
          fill={currentMedia?.cardtext || "white"}
        />
        <path
          d="M19.581,3.893v.479a7.683,7.683,0,0,0,.479,2.264,32.153,32.153,0,0,0,2.178,3.877c1.4,2.438,2.985,5.252,4.4,7.709,1.165,2.023,2.248,4.62,5.14,4.658,3,.044,4-2.61,5.1-4.528C40.333,12.266,47.41.017,47.41.017H44.143S37.393,11.964,34.04,18c-.429.772-1.28,1.788-2.264,1.788-1.5,0-2.248-1.781-2.918-3.007-1.8-3.277-3.537-6.414-5.226-9.582-.533-.994-1.61-2.305-.873-3.658.483-.883,1.454-.826,2.832-.826,0-.025,13.326,0,13.326,0V.017H26.811A28.67,28.67,0,0,0,22.8.147a4.042,4.042,0,0,0-3.223,3.747"
          transform="translate(42.59 0)"
          fill={currentMedia?.cardtext || "white"}
        />
      </g>
    </svg>
  );
}

export default Logo2;
