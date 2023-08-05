/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono"],
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-gradient":
          "radial-gradient(103.63% 203.27% at 56.5% 37.9%, #002366 0%, #000000 100%)",
        "text-fluid-blue":
          "radial-gradient(81.59% 81.59% at 50% 50%, #224A96 0%, #002366 100%)",
        "text-gradient-gray":
          "radial-gradient(166.4% 294.12% at 56.5% 37.9%, #FFFFFF 0%, #000000 100%)",
        "button-bg-gradient":
          "radial-gradient(103.63% 203.27% at 56.5% 37.9%, #FFFFFF 0%, #858585 100%)",

        autopay: "0px 0px 24px 0px #FFFFFF59",
        wallpaper: "url('/images/wallpaper.webp')",
      },
    },
  },
  plugins: [],
};
