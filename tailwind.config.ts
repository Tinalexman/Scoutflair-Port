import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#192B4D",
        "primary-2": "#041931",
        "primary-3": "#4BBAC1",
        secondary: "#F2A725",
        "pale-green": "#4BBAC1",
        "secondary-2": "#946108",
        "background-gray": "#EBE9EB",
        "border-gray": "#D1D1D1",
        "black-56": "rgba(0, 0, 0, 0.56)",
        "black-80": "rgba(0, 0, 0, 0.8)",
        "black-92": "rgba(0, 0, 0, 0.92)",
      },
      fontFamily: {
        'merriweather': ['var(--font-merriweather)', 'sans-serif'],
        'lato': ['var(--font-lato)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      screens: {
        sm: {
          max: "400px",
        },
  
        md: {
          max: "768px",
        },
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.07)',
        'custom-1': "0 0 20px rgba(0, 0, 0, 0.15)",
        'custom-2': "0px 8px 10px 0 rgba(209,209,209,0.12)"
      }
    },
  },
  plugins: [],
};
export default config;
