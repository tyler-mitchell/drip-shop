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
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { toggleCart } from "../app/shirtSlice";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../components/Cart";
const Router = () => {
  const { cart } = useSelector((s) => s.shirt);
  const dispatch = useDispatch();
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
          <AnimateSharedLayout>
            <Button
              onClick={() => {
                dispatch(toggleCart());
              }}
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
            <Cart />
          </AnimateSharedLayout>
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
