import React from "react";
import { Modal, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentShirtId } from "../../app/shirtSlice";
import styled from "styled-components";

const SingleModalContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const ModalContent = styled(motion.div)`
  border-radius: 20px;
  width: 500px;
  height: 300px;
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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const ShirtView = () => {
  const dispatch = useDispatch();
  const { currentShirtId } = useSelector((s) => s.shirt);
  console.log(`⭐: ShirtView -> currentShirtId`, currentShirtId);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  let navigate = useNavigate();
  function handleClose() {
    dispatch(setCurrentShirtId({ currentShirtId: false }));
    navigate("/");
  }
  return (
    <AnimatePresence>
      {currentShirtId !== false && (
        <div
          onClick={() => handleClose()}
          key="overlay"
          style={{
            background: "white",
            opacity: 0.2,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      )}
      {!currentShirtId && (
        <SingleModalContainer layoutId={currentShirtId} key="m">
          <ModalContent
            style={{
              backgroundColor: "white",
              borderRadius: "15px",

              padding: "20px",
            }}
            // className={classes.paper}
            key="modal"
            // style={{ height: "60vh", width: "60vh" }}
          >
            hi{" "}
          </ModalContent>
        </SingleModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ShirtView;
