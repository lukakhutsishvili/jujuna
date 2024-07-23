/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        arialgeo: ['"Arial GEO"', "sans-serif"],
        tommaso: ['"ALK Tommaso"', "sans-serif"],
      },
      colors: {
        backgroundColor: {
          purpleStart: "#A583D1",
          purpleMid: "#724AA4",
          purpleEnd: "#1E122E",
          backgroundCol: "#F5F5F5",

          dark: {
            backgroundCol: "#000",
          },
        },

        color: {
          primary: "#FFF",
          secondary: "#aea6b7",
          black: "#000",

          dark: {
            black: "#fff",
          },
        },

        logoColor: {
          circle: "#BA92ED",
          insideCircle: "#000",
        },

        buttonColor: {
          primary: "#613994",
          secondary: "#000",

          dark: {
            primary: "#724AA4",
            secondary: "#fff",
          },
        },

        inputColor: {
          primary: "#000",
          secondary: "#D0CFCF",

          dark: {
            primary: "#fff",
            secondary: "#000",
          },
        },
      },
      keyframes: {
        slide: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        slide: "slide 0.5s infinite",
      },
      transform: {
        "scale-x-negative": "scaleX(-1)",
      },
      screens: {
        xl: "1440px",
        small: "500px",
      },
      backgroundPosition: {
        customRight: " right 4px top -10px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, black, white 90%)",
      },
    },
  },
  plugins: [],
};
