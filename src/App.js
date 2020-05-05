import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import logo from "./logo.svg";
import Router from "./views/Router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
