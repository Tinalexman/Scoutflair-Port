import React from "react";
import Banner from "./Banner";
import Bio from "./Bio";
import Posts from "./Posts";

const Profile = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <Banner />
      <div className="w-full grid grid-cols-[1fr_2fr] gap-6">
        <Bio />
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
