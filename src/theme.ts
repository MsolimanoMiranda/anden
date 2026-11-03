import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#d84a1b", contrastText: "#fffaf3" },
    secondary: { main: "#243e73" },
    background: { default: "#efe6d6", paper: "#fffaf3" },
    text: { primary: "#1c1612", secondary: "#5e5348" },
    divider: "#e0d3c2",
  },
  typography: {
    fontFamily: "var(--font-outfit), Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 560,
      letterSpacing: "-0.045em",
      lineHeight: 0.92,
    },
    h2: {
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 540,
      letterSpacing: "-0.03em",
      lineHeight: 1.05,
    },
    h3: {
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 540,
      letterSpacing: "-0.02em",
    },
    button: { textTransform: "none", fontWeight: 650, letterSpacing: 0 },
    overline: { letterSpacing: "0.16em", fontWeight: 700 },
  },
  shape: { borderRadius: 0 },
});

export default theme;
