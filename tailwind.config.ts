import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sans)", "system-ui"]
      },
      colors: {
        brand: {
          DEFAULT: "#1a73e8",
          dark: "#174ea6",
          light: "#e8f0fe"
        }
      }
    }
  },
  plugins: []
};

export default config;
