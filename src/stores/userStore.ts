import { StaticImageData } from "next/image";
import { create } from "zustand";

import Pic from "@/public/dashboard/scout/ellipse-2386.png";

export type tUser = {
  image: string | StaticImageData;
  role: "Scout" | "Coach" | "Player";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export const useCurrentUserStore = create<tUser>((set) => ({
  image: Pic,
  role: "Scout",
  firstName: "Josh",
  lastName: "Fayomi",
  email: "johnfayomi@mail.com",
  phone: "090 123 4567",
}));
