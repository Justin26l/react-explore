/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{ts,tsx}", // Include TypeScript files
    ],
    theme: {
      extend: {
        colors: {
          "bw-darkblue": "#040dbf",
          "bw-lightblue": "#01f2f2",
          "bw-gold": "#f2df79",
          "bw-orange": "#F37406",
          "bw-background": "#3A53BA",
        },
      },
    },
    plugins: [],
  };