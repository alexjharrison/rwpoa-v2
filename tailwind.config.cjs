/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#d49bd6",
          300: "#516ab7",
          500: "#424a9b",
          700: "#332a7f",
          900: "#240a64",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
