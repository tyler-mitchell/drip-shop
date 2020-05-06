import React from "react";
import {
  List,
  ListItem,
  Grid,
  Container,
  Modal,
  makeStyles,
  Dialog,
  Typography,
} from "@material-ui/core";
import { data } from "../../app/data";
import Product from "../../components/Product";
import Banner from "../../components/Banner";
import { Outlet } from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentShirtId } from "../../app/shirtSlice";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import "./mason.css";
const SingleModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
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

const StoreView = () => {
  const { currentShirtId, currentShirtTitle, currentShirtImage } = useSelector(
    (s) => s.shirt
  );
  const classes = useStyles();
  let dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
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
        {/* <ProductList>
          <Grid container spacing={5}>
            {data.map((d, index) => (
              <Grid item key={"shirt" + index} xs={3}>
                <Product index={index} {...d} />
              </Grid>
            ))}
          </Grid>
        </ProductList> */}
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
      {/* <Outlet /> */}
      <AnimatePresence>
        {currentShirtId !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            key="overlay"
            style={{
              background: "white",
              opacity: 0.2,
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,

              right: 0,
            }}
          />
        )}
        {currentShirtId !== false && (
          <SingleModalContainer layoutId={currentShirtId} onClick={handleClose}>
            <ModalContent
              className={classes.paper}
              layoutId={currentShirtId}
              key="modal"
              // style={{ height: "60vh", width: "60vh" }}
            >
              <motion.div
                layoutId={currentShirtId + "title"}
                style={{ display: "flex" }}
              >
                <div
                  style={{
                    objectFit: "cover",
                    width: "400px",
                    height: "400px",
                  }}
                >
                  <img
                    src={currentShirtImage}
                    width="200px"
                    style={{ borderRadius: "10px" }}
                    alt="product"
                  />
                </div>
                <Typography
                  variant="h5"
                  style={{ fontWeight: 600 }}
                  color="initial"
                >
                  {currentShirtTitle}
                </Typography>
              </motion.div>
            </ModalContent>
          </SingleModalContainer>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default StoreView;
