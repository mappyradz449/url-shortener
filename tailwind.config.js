/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blueGray: {
        100: "#f5f5f5",
        200: "#e5e7eb",
        300: "#D3F0EA",
        400: "#98C6BB",
        500: "#5B8AA2",
        600: "#175D4F",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@shrutibalasa/tailwind-grid-auto-fit"),
  ],
};
