import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },

  secondary: {
    100: "#d7ffe1",
    200: "#aeffc3",
    300: "#86ffa5",
    400: "#5dff87",
    500: "#35ff69",
    600: "#2acc54",
    700: "#20993f",
    800: "#15662a",
    900: "#0b3315",
  },

  neutral: {
    100: "#daf5ff",
    200: "#b4ebff",
    300: "#8fe0ff",
    400: "#69d6ff",
    500: "#44ccff",
    600: "#36a3cc",
    700: "#297a99",
    800: "#1b5266",
    900: "#0e2933",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
