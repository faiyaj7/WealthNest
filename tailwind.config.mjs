/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@preline/strong-password/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        pt: ["PT Sans", "serif"],
        oswald: ["Oswald", "serif"],
        besley: ["Besley", "serif"],
      },
      colors: {
        customBlack: "#32302f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
