"use client";

import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import FormationImage from "@/public/dashboard/player/Group 1000001949.png";
import ShieldImage from "@/public/icons/Shield Icon.svg";
import StyleImage from "@/public/icons/Style Icon.svg";

interface iNote {
  image: string | StaticImageData;
  title: string;
  content: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<iNote[]>([
    {
      image: FormationImage,
      title: "Formation:",
      content:
        "The 4-3-3 formation is highly effective due to its balance between defense and attack, flexibility in midfield play and strong wing play. It allows for pressing high up the pitch, quick transitions, and control of the game through midfield dominance.",
    },
    {
      image: ShieldImage,
      title: "Defensive Strategy:",
      content:
        "We maintain a solid backline, compact shape, and discipline positioning. Key elements includes zonal marking, pressing the ball, and quick recovery. This strategy minimizes space for opponents, reduces scoring opportunities, and allows effective counter-attacks.",
    },
    {
      image: StyleImage,
      title: "Passing Style:",
      content:
        "A quick accurate ball movement to maintain possession and control the game’s tempo. Key elements include, short, precise passes, off-the-ball movement, and creating passing triangles. This style breaks down defenses, creates scoring opportunities, and minimizes turnovers.",
    },
  ]);

  return (
    <div className="flex flex-col rounded-[16px] overflow-hidden border-2 border-border-gray shadow-custom-2 items-center bg-white">
      <div className="bg-primary-2 bg-opacity-[0.96] py-2 w-full">
        <h2 className="text-white text-lg text-center font-bold py-3">
          Tactical Notes
        </h2>
      </div>
      <div className="flex justify-between px-5 py-5 w-full">
        {notes.map((n, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 items-start w-full py-1 px-3"
          >
            <div className="flex gap-4 w-fit items-center">
              <Image
                src={n.image}
                alt="image"
                className="w-6 h-7 object-cover"
                width={24}
                height={28}
              />
              <h2 className="text-black text-[16px] font-semibold">{n.title}</h2>
            </div>
            <p className="text-[14px] text-black">{n.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
