/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        gold: "#BE9F56",
      },
      screens: {
        'desktop': '1700px',
      },
    },
  },
  plugins: [],
};
