import { StaticImageData } from "next/image";

export interface iChatUser {
  image: StaticImageData | string;
  name: string;
  count: number;
  timestamp: Date;
  lastMessage: string;
}
