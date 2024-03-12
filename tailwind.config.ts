import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-openSans)', 'sans-serif'],
        'bagnard': ['var(--font-bagnard)', 'sans-serif'], // Add your font name here
      },
      colors: {
        "eggshell" : "#FAF3DD",
        "persian-red": "#CC2936",
        "reseda-green": "#71816D",
        "bistre": "#342A21",
        "eerie-black": "#191716",
      },
    },
  },
  plugins: [],
};
export default config;
