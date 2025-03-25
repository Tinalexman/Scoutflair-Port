import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="px-[106px] bg-ghostwhite pb-20">
      <div className="bg-primary py-10 rounded-[20px]">
        <div className="flex flex-col gap-2 items-center justify-center text-white">
          <p className="font-bold font-manrope text-lg">
            The Bridge Between Talent and Triumph!
          </p>
          <h2 className="font-bold font-manrope text-4xl w-[850px] text-center">
            Where Talent Meets Opportunity—Play Hard, Get Noticed!
          </h2>
          <p className="font-normal font-lato text-xl w-[950px] text-center">
            Scoutflair is where passionate players, dedicated scouts, and visionary coaches connect. Showcase your skills, discover top talent, and take your football journey to the next level.
          </p>
          <Link
            href={""}
            className="font-semibold text-lg font-poppins flex items-center justify-center w-[292px] h-[55px] text-white rounded-[24px] mt-4 border border-white bg-transparent"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
