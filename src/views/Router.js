import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Banner from "../components/Banner";
import ShirtView from "./ShirtView";
import StoreView from "./StoreView";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import CartIcon from "@material-ui/icons/ShoppingBasketRounded";
import { useSelector } from "react-redux";
const Router = () => {
  const { cart } = useSelector((s) => s.shirt);
  return (
    <div>
      <AppBar
        position="fixed"
        color="transparent"
        style={{ backgroundColor: "white" }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Drip Shop
          </Typography>
          <div style={{ flexGrow: 1 }} />

          <Button
            startIcon={
              <Badge badgeContent={cart.length}>
                <CartIcon />{" "}
              </Badge>
            }
            variant="text"
            color="default"
            size="large"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textTransform: "none",
              marginRight: "30px",
              fontWeight: 650,
            }}
          >
            My Cart
          </Button>
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
