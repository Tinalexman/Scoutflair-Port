import "./globals.css";
import type { Metadata } from "next";
import { Merriweather, Lato, Inter } from "next/font/google";

import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import AuthProvider from "../providers/AuthContext";

import { Toaster } from "react-hot-toast";
import UserProvider from "../providers/UserProvider";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Scoutflair",
    default: "Scoutflair",
  },
  description: "Democratizing football: Scouting, Analysis and Insgights",
};

const primary: MantineColorsTuple = [
  "#f0f3fa",
  "#dee4ee",
  "#b8c5df",
  "#90a6d0",
  "#6f8ac4",
  "#5a79bc",
  "#4e71bb",
  "#4060a4",
  "#365593",
  "#2b4983",
];

const white: MantineColorsTuple = [
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
  "#FFFFFF",
];

const theme = createTheme({
  colors: {
    primary,
    white,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body
        className={`${merriweather.variable} ${lato.variable} ${inter.variable} font-sans-serif`}
      >
        <Toaster />

        <AuthProvider>
          <UserProvider>
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
