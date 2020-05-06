import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import logo from "./logo.svg";
import Router from "./views/Router";
import "./App.css";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
