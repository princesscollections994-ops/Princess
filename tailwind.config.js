
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        brand: ['"Poppins"', "ui-sans-serif", "system-ui", "sans-serif"],
        script: ['"Marcellus", "ui-serif", "serif"'],
      },
      colors: {
        princessPink: "#ec4899",
        princessPurple: "#a855f7",
        princessNavy: "#1e3a8a",
      },
      boxShadow: {
        glow: "0 10px 30px rgba(236, 72, 153, 0.35)",
      }
    },
  },
  plugins: [],
};
