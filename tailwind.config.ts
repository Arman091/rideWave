import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
     colors: {
      'gray-primary-100': 'var(--bg-color-primary)',
      'custom-button-primary-bg': "var(--button-primary-bg)",
      'custom-button-primary-text': "var(--button-primary-text)",
      'custom-yellow-100':"var(--yellow_color)",
      'text-tertairy':"var(--text-tertiary)",
      'background-secondary':"var(--background-secondary)",
      'custom-text-gray':"var(--text-gray)"
     },
      fontSize: {
      xs: "var(--font-size-xs)",
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
      "h1": "var(--font-size-h1)",
    } 
    },
  },
  plugins: [],
};

export default config;
