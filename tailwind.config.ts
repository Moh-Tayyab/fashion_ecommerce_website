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
        primary: '#024E82',
        secondary: '#D6763C', 
        text: '#555555',
        heading: '#000000',
        linear: '#A0AEAA',
      },
      fontFamily: {
        arimo: ['Arimo', 'sans-serif'],
        },
    },
  },
  plugins: [],
};
export default config;
