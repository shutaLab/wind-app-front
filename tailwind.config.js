/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'custom-black': '#444444', 
      'cream-white': '#FEFCF6',
      'cream': '#F6F1EB',
      'gray': "#696969",
      'green': "#7ccc7c",
      'custom-red': "#FF4D4E"
    },
    },
    
  },
  plugins: [],
}