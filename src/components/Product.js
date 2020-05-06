import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCurrentShirtId } from "../app/shirtSlice";
import shirt from "../assets/blank_shirt.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Product = (props) => {
  const { title, subtitle, image, size, index, featured } = props;
  const classes = useStyles();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  //   work_id: 27578492,
  //   rank: 18,
  //   ia_code: "u-tee-slim-crew",
  //   artist: "ilustrata",
  //   full_title: "The Great Ramen off Kanagawa Unisex T-Shirt",
  //   work_title: "The Great Ramen off Kanagawa",
  //   product_url:
  //     "/people/ilustrata/works/27578492-the-great-ramen-off-kanagawa?cat_context=m-tees&grid_pos=18&p=t-shirt&rbs=61e2776b-e1db-4c1d-985d-a26917552491&ref=shop_grid&style=mens",
  //   is_lazy: true,
  //   images: {
  //     thumbnail_url: {
  //       standard:
  //         "https://ih1.redbubble.net/image.412027703.8492/ra%2Cunisex_tshirt%2Cx925%2Ce5d6c5%3Af62bbf65ee%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1u1.jpg",
  //       retina:
  //         "https://ih0.redbubble.net/image.412027703.8492/ra%2Cunisex_tshirt%2Cx1850%2Ce5d6c5%3Af62bbf65ee%2Cfront-c%2C435%2C380%2C420%2C460-bg%2Cf8f8f8.lite-1u1.jpg",
  //     },
  //     thumbnail_hover_url: {
  //       standard:
  //         "https://ih0.redbubble.net/image.412027703.8492/raf%2C220x294%2C075%2Cf%2Ce5d6c5%3Af62bbf65ee.lite-1u1.jpg",
  //     },
  // const shirtId = featured ? "shirt-featured" + index : "shirt" + index;
  const shirtId = "shirt" + index;
  return (
    <motion.div layoutId={shirtId}>
      <Card
        style={{
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          maxWidth: "196px",
          borderRadius: "10px",
          pointerEvents: "cursor",
        }}
        elevation={0}
        className={classes.root}
      >
        <CardActionArea
          style={{
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
          }}
          onClick={() => {
            dispatch(
              setCurrentShirtId({
                currentShirtId: shirtId,
                currentShirtTitle: props.title,
                currentShirtImage: props.image,
                currentShirtPrice: props.price,
              })
            );
            // navigate(shirtId, { state: props });
          }}
        >
          {/* <div style={{ borderRadius: "10px", background: "#fafafa" }}> */}
          <div
            style={{
              // height: "150px",

              position: "relative",
              objectFit: "cover",
              userSelect: "none",
              borderRadius: "10px",

              userDrag: "none",
            }}
          >
            {" "}
            <motion.img
              layoutId={shirtId + "image"}
              src={props.image}
              style={{
                userSelect: "none",
                userDrag: "none",
                pointerEvents: "none",
                borderRadius: "10px",
              }}
              height="100%"
              width="100%"
              alt="shirt"
            />
            <motion.div
              layoutId={shirtId + "price"}
              style={{
                position: "absolute",
                bottom: "8px",
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
                ${props?.price}
              </Typography>
            </motion.div>
          </div>
          {/* </div> */}
          <CardContent>
            <motion.div layoutId={shirtId + "title"}>
              <Typography
                variant="subtile1"
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                }}
                color="initial"
                gutterBottom
              >
                {props?.title}
              </Typography>
            </motion.div>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default Product;
