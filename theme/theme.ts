"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Jost", sans-serif',
    h1: {
      fontFamily: '"Lexend", sans-serif',
    },
    h2: {
      fontFamily: '"Lexend", sans-serif',
    },
    h3: {
      fontFamily: '"Lexend", sans-serif',
    },
    body1: {
      textDecoration: "none",
      mb: 2,
    },
    // Continue for h4, h5, h6 as needed
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#276EF1",
    },
    // Will add other specifications as needed
  },
});

export default theme;
