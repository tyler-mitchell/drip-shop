import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Banner from "../components/Banner";
import ShirtView from "./ShirtView";
import StoreView from "./StoreView";

const Router = () => {
  return (
    <div>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Drip Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="md"
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="" element={<StoreView />}>
            <Route path=":shirtId" element={<ShirtView />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
};

export default Router;
