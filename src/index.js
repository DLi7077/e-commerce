import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./index.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      highlight: "hsl(170, 100%, 70%)",
    },
  },
  typography: {
    allVariants: {
      textTransform: "none",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: `1px solid hsl(170, 100%, 70%)`,
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
