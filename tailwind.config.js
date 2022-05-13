module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cgreen: "#ABD699",
                corange: "#e7a87a",
                cred: "#e07c62",
                cteal: "#5cdb94",
                fiolGray: "#2a2e35",
                fiodGray: "#12181b",
                caparol: "#ecfcf0",
            },
            width: {
                rbox: "1000px",
            },
            spacing: {
                84: "21rem",
                128: "32rem",
            },
            zIndex: {
                neg: "-1",
            },
            padding: {
                "overlay-reg": "30vw",
            },
            borderWidth: {
                DEFAULT: "1px",
            },
        },
        screens: {
            // => @media (max-width: ???px)
            md: { max: "1100px" },
            sm: { max: "600px" },
            xs: { max: "500px" },

            "grid-lg": { max: "1624px" },
            "grid-md": { max: "1224px" },
            "grid-sm": { max: "900px" },
        },
    },
    plugins: [],
};
