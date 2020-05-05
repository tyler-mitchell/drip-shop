import React from "react";
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import shirt from "../assets/blank_shirt.png";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Product = ({ id, ...props }) => {
  console.log(`⭐: Product -> id`, id);
  const { title, subtitle, image, size } = props;
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <Card
      variant="outlined"
      style={{
        alignItems: "center",
        flexDirection: "column",
        pointerEvents: "cursor",
      }}
      className={classes.root}
    >
      <CardActionArea
        style={{
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
        onClick={() => {
          navigate(id, { state: props });
        }}
      >
        {/* <div style={{ borderRadius: "10px", background: "#fafafa" }}> */}
        <div
          style={{
            height: "200px",
            width: "200px",
            position: "relative",
            objectFit: "cover",
          }}
        >
          {" "}
          <img src={shirt} height="100%" alt="shirt" />
        </div>
        {/* </div> */}
        hello
      </CardActionArea>
    </Card>
  );
};

export default Product;
