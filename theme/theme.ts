"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,   // Custom breakpoint for small devices
      md: 800,  // Custom breakpoint for medium devices
      lg: 1280,  // Custom breakpoint for large devices
      xl: 1920   // Custom breakpoint for extra large devices
    }
  },
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
    button: {
      textDecoration: "none",
      textTransform: "capitalize",
    }
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
