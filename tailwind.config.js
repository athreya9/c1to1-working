
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Connect1to1 Brand Colors (derived from logo)
        c1to1: {
          teal: "#1E4D5A",       // Dark teal from logo
          gold: "#D4A017",       // Gold from logo
          "light-teal": "#2A6E7E", // Lighter teal shade from homepage example
          "dark-blue": "#0F3A4A",  // A potentially darker shade if needed
          "light-gold": "#EAC674", // A potentially lighter gold if needed
        },
        // Keeping original primary/secondary for potential other uses, 
        // but prioritizing c1to1 colors for branding
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Default Blue
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Default Amber
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Ensure Inter is primary sans font
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

