import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}", // <- Add this for capital C
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "var(--color-espresso)",
        cream: "var(--color-cream)",
        caramel: "var(--color-caramel)",
        amber: "var(--color-amber)",
        heading: "var(--color-heading)",
        body: "var(--color-body)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        "surface-alt": "var(--color-surface-alt)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      spacing: {
        section: "var(--section-space)",
      },
      maxWidth: {
        content: "var(--content-width)",
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
      },
      borderRadius: {
        control: "var(--radius-control)",
      },
    },
  },
  plugins: [],
};

export default config;
