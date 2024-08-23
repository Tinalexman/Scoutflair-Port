import React from "react";

import Image from "next/image";
import img from "@/public/dashboard/scout/Basemap image.png";

const MapImage = () => {
  return (
    <div className="w-full h-full">
      <Image
        src={img}
        alt="map"
        className="w-full h-full object-cover rounded-[1rem]"
      />
    </div>
  );
};

export default MapImage;
