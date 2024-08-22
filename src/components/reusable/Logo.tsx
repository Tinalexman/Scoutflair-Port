import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={32}
        height={32}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clipPath="url(#clip0_225_1342)">
          <path
            d="M24.6205 43.8747L4.13307 23.4182C-1.13811 18.1669 -1.13811 9.64175 4.13307 4.39042C9.40426 -0.870374 17.9367 -0.870374 23.2079 4.39042L43.6954 24.8375C48.9666 30.0983 48.9666 38.614 43.6954 43.8747C38.4242 49.1261 29.8917 49.1261 24.6205 43.8747Z"
            fill="#083162"
          />
          <path
            d="M3.55565 24.686L23.3605 44.4519C17.8523 49.3531 9.39567 49.1733 4.115 43.8936C-1.17514 38.6233 -1.36475 30.1834 3.55565 24.686Z"
            fill="#F2A725"
          />
          <path
            d="M44.4455 23.4084L24.6406 3.63311C30.1488 -1.26814 38.6055 -1.08836 43.8861 4.19136C49.1763 9.47107 49.3659 17.911 44.4455 23.4084Z"
            fill="#F2A725"
          />
        </g>
      </svg>
      <div className="flex text-xl font-merriweather text-white font-bold">
        <p>Scout</p>
        <p className="font-normal">Flair</p>
      </div>
    </div>
  );
};

export default Logo;
