import {
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { data } from "../../app/data";
import { setCurrentShirtId } from "../../app/shirtSlice";
import Banner from "../../components/Banner";
import Product from "../../components/Product";
import SelectField from "../../components/SelectField";
import CartIcon from "@material-ui/icons/ShoppingCartRounded";
import "./mason.css";

const SingleModalContainer = styled.div`
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

const ProductList = styled.div`
  /* background-color: #eeeeee; */
  border-radius: 25px;

  height: 500px;
  margin: 0;
  padding: 0 20px 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  list-style: none;
`;
const ModalContent = styled(motion.div)`
  border-radius: 20px;
  width: 70vh;
  height: 60vh;
  position: fixed;

  z-index: 12001;

  /* pointer-events: none; */
`;
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "15px",

    boxShadow:
      "0 12px 28px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
    padding: theme.spacing(2, 4, 3),
  },
}));

const colors = ["black", "white", "grey", "navyblue"];

const StoreView = () => {
  const {
    currentShirtId,
    currentShirtTitle,
    currentShirtImage,
    currentShirtPrice,
  } = useSelector((s) => s.shirt);

  const classes = useStyles();
  let dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const ref = React.useRef();

  useOnclickOutside(ref, () => {
    dispatch(setCurrentShirtId({ currentShirtId: false }));
  });

  function handleClose() {
    dispatch(setCurrentShirtId({ currentShirtId: false }));
  }
  const ProductCard = ({ index, data, width }) => (
    <Product index={index} key={"shirt" + index} {...data} />
  );
  return (
    <AnimateSharedLayout type="crossfade">
      <Banner title="Featured" />
      <Banner title="Popular" />
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((d, index) => (
            <Product index={index} {...d} />
          ))}
        </Masonry>
      </Container>
      <AnimatePresence>
        {currentShirtId !== false && (
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
        {currentShirtId !== false && (
          <SingleModalContainer layoutId={currentShirtId}>
            <ModalContent
              className={classes.paper}
              layoutId={currentShirtId}
              key="modal"

              // style={{ height: "60vh", width: "60vh" }}
            >
              <motion.div
                // layoutId={currentShirtId + "title"}
                style={{ display: "flex", position: "relative" }}
              >
                <div
                  style={{
                    objectFit: "cover",
                    width: "400px",
                    height: "400px",
                    position: "relative",
                  }}
                  // ref={ref}
                >
                  <motion.img
                    layoutId={currentShirtId + "image"}
                    src={currentShirtImage}
                    width="200px"
                    style={{ borderRadius: "10px" }}
                    alt="product"
                  />
                  <motion.div
                    layoutId={currentShirtId + "price"}
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "6px",
                      padding: "5px",
                      borderRadius: "5px",
                      opacity: 0.9,
                      background: "white",
                    }}
                  >
                    <Typography
                      variant="subtile1"
                      style={{
                        fontWeight: 650,
                        fontSize: 16,
                        fontFamily: "Inter, sans-serif",
                      }}
                      color="initial"
                    >
                      ${currentShirtPrice}
                    </Typography>
                  </motion.div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <IconButton
                    style={{
                      position: "absolute",
                      zIndex: 3200,
                      top: -10,
                      right: -20,
                    }}
                    onClick={(e) => {
                      handleClose();
                    }}
                  >
                    <Close />
                  </IconButton>
                  <motion.div layoutId={currentShirtId + "title"}>
                    <Typography
                      variant="h5"
                      style={{ fontWeight: 600 }}
                      color="initial"
                      gutterBottom
                    >
                      {currentShirtTitle}
                    </Typography>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    enter={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.75 }}
                  >
                    <motion.div style={{ display: "flex" }}>
                      {colors.map((color) => (
                        <motion.div
                          style={{
                            background: color,
                            borderRadius: "50px",
                            height: "20px",
                            width: "20px",
                            margin: "10px",
                            border: "solid 2px rgba(0,0,0,0.8)",
                          }}
                        />
                      ))}
                    </motion.div>
                    <SelectField
                      label="Sizes"
                      options={["S", "M", "L", "XL"]}
                      defaultValue="M"
                    />

                    <div style={{ marginBottom: "10px" }} />
                    <Button
                      disableElevation
                      size="large"
                      startIcon={
                        <motion.div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          exit={{ x: -30 }}
                          // layoutId={currentShirtId + "cartIcon"}
                        >
                          <CartIcon style={{ color: "white" }} />
                        </motion.div>
                      }
                      style={{
                        fontWeight: 550,
                        width: "100%",
                        color: "white",
                        background: "rgba(0,0,0,0.85)",
                      }}
                      variant="contained"
                    >
                      Add to cart
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </ModalContent>
          </SingleModalContainer>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default StoreView;
