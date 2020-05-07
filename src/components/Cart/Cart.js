import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import CreditCard from "@material-ui/icons/CreditCard";
import Close from "@material-ui/icons/Close";
import { Grid } from "@material-ui/core";

import {
  DailyHeader,
  DailyCart,
  DailyCheckout,
  DailySummary,
} from "./CartComponents";
import styled from "styled-components";

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

const Cart = () => {
  const styles = useStyles();

  return (
    <Grid>
      <DailyHeader />

      <DailyCheckout />

      <DailyCart />

      <Box pb={3}>
        <DailySummary />
      </Box>
    </Grid>
  );
};

export default Cart;
