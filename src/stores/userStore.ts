import { StaticImageData } from "next/image";
import { create } from "zustand";

export type tUser = {
  image: string | StaticImageData;
  role: "Scout" | "Coach" | "Player" | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type tPlayer = {
  role: string;
  jersey: number;
  age: number;
  bio: string;
  dob: Date;
  nationality: string;
  foot: "Right" | "Left" | "Both" | "";
  height: number;
  weight: number;

  recommendedName: string;
  recommendedEmail: string;
  recommendedPhone: string;

  fbLink: string;
  igLink: string;
  xLink: string;
  ttLink: string;
};

export const useCurrentUserStore = create<tUser>((set) => ({
  image: "",
  role: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
}));

export const usePlayerDataStore = create<tPlayer>((set) => ({
  role: "",
  jersey: 0,
  age: 0,
  bio: "",
  dob: new Date(),
  nationality: "",
  foot: "",
  height: 0,
  weight: 0,

  recommendedName: "",
  recommendedEmail: "",
  recommendedPhone: "",

  fbLink: "",
  igLink: "",
  xLink: "",
  ttLink: "",
}));
