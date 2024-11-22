/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        arimo: ['Arimo', 'extrabold'], // Add Arimo font
        baloo: ['Baloo', 'cursive', 'extrabold'],
        lato: ['Lato', 'regular','bold' ]
      },
    },
  },
  plugins: [],
}

