import { StaticImageData } from "next/image";

export interface iChatUser {
  id: string;
  image: StaticImageData | string;
  name: string;
  count: number;
  timestamp: Date;
  lastMessage: string;
}

export interface iMessage {
  id: string;
  senderID: string;
  senderName: string;
  senderImage: string | StaticImageData;
  timestamp: Date;
  content: string;
}
