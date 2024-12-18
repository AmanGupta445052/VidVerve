/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          'custom-black': '5px 5px 15px rgba(0, 0, 0, 0.9)',
        },
      },
    },
    plugins: [],
  }