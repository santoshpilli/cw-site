/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "1xs": "12px",
                xs: "14px",
                base: "16px",
                sm: "18px",
                md: "20px",
                lg: "22px",
                xl: "24px",
                "2xl": "36px",
                "3xl": "42px",
                "4xl": "56px",
                "5xl": "80px",
                "6xl": "40px",
                "7xl": "64px",
                "8xl": "28px",
                "9xl": "48px",
            },
            colors: {
                darkBlack: "#101828",
                blue: "#0C173A",
                secondry: "#A2D61B",
                blueshade1: "#667085",
                dimblue: "#5872C7",
                green: "#9BD505",
                lightgreen: "#D7E9A9",
                grey: "#E4E7EC",
                lightgrey: "#475467",
                greyshade1: "#F2F4F7",
                skyblue: "#BEE1E6",
                greenyellow: "#698D08",
                maryblue: "#006D77",
                ambrosiaivory: "#fff3ea",
                englishchannelfog: "#cbd1e5",
                vesperviolet: "#98a2b3",
                greenlantern: "#a4cd38",
                silverpolish: "#c6c6c6",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                "3xl": "1700px",
            },
        },
        fontFamily: {
            chivo: ["Chivo", "sans-serif"],
            inter: ["Inter", "sans-serif"],
            noto: ["Noto", "sans-serif"],
        },
    },
    plugins: [require("tw-elements/dist/plugin", "@tailwindcss/line-clamp")],
});