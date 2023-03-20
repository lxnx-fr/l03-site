module.exports = {
    theme: {
        extend: {
            colors: {
                'primary': '#FFD796',
            },
            keyframes: {
                fadeinleft: {
                    "0%": {
                        opacity: "10%",
                        transform: "translateX(-200px)",
                    },
                    "100%": {
                        opacity: "100%",
                        transform: "translateX(0%)",
                    }
                },
                fadeout: {
                    "0%": {
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "100%",
                    }
                },
                fadein: {
                    "0%": {
                        opacity: "0%",
                    },
                    "100%": {
                        opacity: "100%",
                    }
                },
                fadescale: {
                    "0%": {
                        opacity: "0%",
                    },
                    "80%": {
                        opacity: "80%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
            },
            animation: {
                fadeinleft: "fadeinleft .7s cubic-bezier(1,.2,.32,.93)",
                fadescale: "fadescale .5s ease-in-out",
                fadeout: "fadeout .35s ease-in-out",
                fadein: "fadein .35s ease-in-out",
            },
        },
    },
    plugin: [],

}
