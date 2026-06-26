import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          light: "rgba(255, 255, 255, 0.04)",
          border: "rgba(255, 255, 255, 0.06)",
          "border-strong": "rgba(59, 130, 246, 0.15)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
