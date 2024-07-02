const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./posts/**/*.{mdx,js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        daddybee: ['DaddyBee', 'sans-serif'],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.indigo,
        contrast: colors.pink,
        dark: colors.gray,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        golang: '#00ADD8',
        react: '#61DAFB',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              fontWeight: "inherit",
            },
            a: {
              color: theme("colors.secondary.400"),
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": {
                textDecoration: "underline",
                color: theme("colors.secondary.500"),
              },
            },
            "a code": {
              color: "inherit",
            },
            thead: {
              color: "inherit",
            },
            "ol > li::before": {
              color: theme("colors.secondary.600"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.secondary.600"),
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.secondary.300"),
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": {
                textDecoration: "underline",
                color: theme("colors.secondary.200"),
              },
            },
            "a code": {
              color: "inherit",
            },
            thead: {
              color: "inherit",
            },
            tr: {
              borderColor: theme("colors.gray.400"),
            },
            "ol > li::before": {
              color: theme("colors.secondary.400"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.secondary.400"),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
