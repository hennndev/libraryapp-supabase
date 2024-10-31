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
        playwrite: ["Playwrite GB S", "sans-serif"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
