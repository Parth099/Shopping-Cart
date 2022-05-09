module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: { cgreen: "#ABD699", corange: "#e7a87a", cred: "#e07c62", cteal: "#5cdb94", fiolGray: "#2a2e35", fiodGray: "#12181b" },
            width: {
                rbox: "1000px",
            },
            spacing: {
                128: "32rem",
            },
            zIndex: {
                neg: "-1",
            },
        },
        screens: {
            // => @media (max-width: ???px)
            md: { max: "1100px" },
            sm: { max: "600px" },
            xs: { max: "500px" },
        },
    },
    plugins: [],
};
