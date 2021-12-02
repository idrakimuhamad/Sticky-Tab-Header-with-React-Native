const primary = "rgb(50, 109, 178)";
const tintColorDark = "#fff";
const black = "#000";
const alphaWhite = "rgba(255,255,255, 0.35)";
const dark = "#0A1724";
const offDark = "#141F31";

export default {
  light: {
    text: black,
    background: "#fff",
    tint: primary,
    tabIconDefault: "#ccc",
    tabIconSelected: primary,
    mainHeaderBg: primary,
    stickyHeaderBg: "#fff",
    primary: "rgb(50, 109, 178)",
    white: "#fff",
    black,
    dark,
    offDark,
    prices: "rgba(0,0,0, .5)",
    alphaWhite,
  },
  dark: {
    text: "#fff",
    background: black,
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    mainHeaderBg: "#111",
    stickyHeaderBg: "#111",
    primary: "rgb(50, 109, 178)",
    white: "#fff",
    black,
    dark,
    offDark,
    prices: "rgba(255,255,255, .5)",
    alphaWhite,
  },
};
