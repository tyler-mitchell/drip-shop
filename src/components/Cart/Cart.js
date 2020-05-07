import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import CreditCard from "@material-ui/icons/CreditCard";
import Close from "@material-ui/icons/Close";
import { Grid, IconButton } from "@material-ui/core";

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../app/shirtSlice";
import {
  DailyHeader,
  DailyCart,
  DailyCheckout,
  DailySummary,
} from "./CartComponents";
import styled from "styled-components";
const SingleModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;

  justify-content: center;
  z-index: 1000;
  align-items: center;
`;
const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: "#ffffff",
  },
  toolbar: {},
  edgeSidebarBody: {
    padding: "24px 0 40px 24px !important",
    background: "none",
    boxShadow: "none",
    right: 24,
  },
  sidebarBody: {
    padding: "24px 0 40px 24px !important",
    background: "none",
  },
  sidebarPaper: {
    maxWidth: 400,
    padding: 16,
    background: "none",
    boxShadow: "none",
  },
  container: {
    minHeight: 0,
    display: "flex",
  },
  content: {
    overflow: "auto",
  },
  footer: {
    border: "unset",
    position: "relative",
    backgroundColor: "#fff",
    "&:before": {
      content: '" "',
      position: "absolute",
      width: "100%",
      height: 24,
      top: 0,
      left: 0,
      transform: "translateY(-100%)",
      background: "linear-gradient(to top, #ffffff, rgba(255,255,255,0))",
    },
    [breakpoints.only("sm")]: {
      paddingRight: 64,
    },
    [breakpoints.up("md")]: {
      paddingBottom: 40,
    },
  },
  fab: {
    position: "fixed",
    bottom: 16,
    right: 16,
    color: "#2E3B4D",
    "& svg": {
      fontSize: 32,
      color: "#fff",
    },
    zIndex: 1500,
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    [breakpoints.up("sm")]: {
      bottom: 40,
    },
    [breakpoints.up("md")]: {
      transform: "scale(0)",
    },
  },
  fabClose: {
    top: 8,
    right: 8,
    width: 48,
    height: 48,
  },
}));
const ModalContent = styled(motion.div)`
  border-radius: 20px;
  height: 80vh;
  width: 90vw;
  position: fixed;

  z-index: 12001;
  background: #fafafa;
  border-radius: 15px;
  overflow: scroll;
  padding: 16px 32px 24px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);

  /* pointer-events: none; */
`;
const Cart = () => {
  const styles = useStyles();
  const { cartOpen } = useSelector((s) => s.shirt);
  let dispatch = useDispatch();
  return (
    <AnimatePresence>
      {cartOpen === true && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          key="overlay"
          style={{
            background: "white",
            opacity: 0.2,
            position: "fixed",
            top: 0,
            zIndex: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      )}
      {cartOpen === true && (
        <SingleModalContainer
          key="cart"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ModalContent>
            <IconButton
              style={{
                position: "absolute",
                zIndex: 3200,
                top: 0,
                right: 0,
              }}
              onClick={(e) => {
                dispatch(toggleCart());
              }}
            >
              <Close />
            </IconButton>
            <Grid>
              {/* <DailyHeader />
      
              <DailyCheckout /> */}

              <DailyCart />

              <Box p={10}>
                <DailySummary />
              </Box>
            </Grid>
          </ModalContent>
        </SingleModalContainer>
      )}
    </AnimatePresence>
  );
};

export default Cart;
