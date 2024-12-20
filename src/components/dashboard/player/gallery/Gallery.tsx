import React from "react";
import Ads from "../common/Ads";
import Feeds from "../common/Feeds";
import Slides from "./Slides";

const Gallery = () => {
  return (
    <div className="w-full gap-6 p-6">
      <Slides />
    </div>
    // <div className="w-full grid grid-cols-[2fr_1fr] p-6 gap-6">
    //   <Slides />
    //   <div className="flex flex-col gap-6 w-full">
    //     <Feeds />
    //     <div className="sticky top-20 self-start">
    //       <Ads />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Gallery;
