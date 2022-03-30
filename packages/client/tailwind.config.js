module.exports = {
    content: [
        "./pages/**/*.{tsx,ts,js,jsx}",
        "./components/**/*.{tsx,ts,jsx,js}",
    ],
    theme: {
        fontFamily: {
            primary: ["Merriweather", "sans-serif"],
            // secondary: ["IBM Plex Sans", "sans-serif"],
            secondary: ["Fira Sans", "serif"],
        },
        colors: {
            blue: "#0070ff",
            black: "#0d0d0d",
            white: "#fff",
            dark: "#484848",
            light: "#e6e6e6",
        },
    },
    plugins: [],
};
