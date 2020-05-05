import React from "react";
import { Routes, Route } from "react-router-dom";
import StoreView from "./StoreView";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Banner from "../components/Banner";
import ShirtView from "./ShirtView";
const Router = () => {
  return (
    <div>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6">Drip Shop</Typography>
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
          <Route path=":shirtId" element={<ShirtView />} />
          <Route path="" element={<StoreView />}></Route>
        </Routes>
      </Container>
    </div>
  );
};

export default Router;
