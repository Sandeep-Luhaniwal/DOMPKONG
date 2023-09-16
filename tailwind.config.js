/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "12px",
      },
    },
    extend: {
      fontSize: {
        sm: "16px",
        md: "20px",
        lg: "22px",
        xl: "24px",
        xxl: "36px",
        xxxl: "64px",
      },
      fontFamily: {
        Azo: "Azo",
        Montserrat: "'Montserrat', sans-serif",
      },
      boxShadow: {
        cardShadow: "0px 14px 56px 0px rgba(253, 218, 96, 0.50)",
        mintShadow: "linear-gradient(180deg, #0A0A0A 0%, rgba(10, 10, 10, 0.00) 100%)",
        faqShadow: "0px 4px 4px 0px rgba(253, 218, 96, 0.65)",
        topShadow: "0px -1px 5px 0px #FDDA60",
        btnShadow: "0px 4px 24px 0px rgba(253, 218, 96, 0.80)",
        hoverimgShadow: "0px 0px 5px 5px rgba(253, 218, 96, 0.70)",
        circleShadow: "0px 1px 10px 1px rgba(253, 218, 96, 0.70)",
      },
      colors: {
        black: "#0A0A0A",
        white: "#ffffff",
        primary: "#FDDA60",
        secondary: "#F1C85D",
        btnHover: "#046fb7",
        borderColor: "rgba(255, 255, 255, 0.20)",
        bgborderColor: "rgba(255, 255, 255, 0.10)",
      },
    },
  },
  plugins: [],
};
