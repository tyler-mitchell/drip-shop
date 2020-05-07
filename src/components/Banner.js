import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LeftIcon from "@material-ui/icons/ChevronLeft";
import RightIcon from "@material-ui/icons/ChevronRight";
import React from "react";

import { data as productData, categories } from "../app/data";
import Product from "../components/Product";
import { Page } from "../motion/Page";
import usePages from "../motion/usePages";
import Masonry from "react-masonry-css";
import "../views/StoreView/mason.css";
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
const Banner = ({ title, featured }) => {
  const data = productData.filter((v, index) => index <= 10);
  const pages = usePages({ data, PageContent: Product });
  const [currentPage, setCurrentPage] = React.useState(2);

  return (
    <div style={{ width: "100%", padding: "30px 30px 0 30px" }}>
      <Typography
        variant="h5"
        color="initial"
        gutterBottom
        style={{
          color: "rgba(0,0,0,0.8)",
          fontWeight: 650,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          // background: "#D0B69F",
          // height: "25vh",
          width: "100%",
          marginBottom: "0",
          borderRadius: "10px",
          overflow: "visible",
          display: "flex",
          position: "relative",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {currentPage > 2 && featured && (
          <IconButton
            aria-label="left"
            style={{ position: "absolute", zIndex: 10, left: -45 }}
            onClick={() => {
              if (currentPage > 2) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            <LeftIcon />
          </IconButton>
        )}

        {featured ? (
          <Page
            currentPage={currentPage}
            onChangePage={(index) => {
              setCurrentPage(index);
            }}
            gap={30}
            originX={0.65}
            contentOffset={2}
            style={{
              // height: 400,
              width: "1080px",

              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, .1)",
            }}

            // scale={0.5}
          >
            {pages}
          </Page>
        ) : (
          <Grid
            // className="my-masonry-grid"
            // columnClassName="my-masonry-grid_column"
            // breakpointCols={breakpointColumnsObj}
            container
            spacing={2}
            style={{ width: "100%" }}
            justify="center"
          >
            {categories.map(({ image, title, width, height }) => (
              <Grid item xs={2} justify="space-between">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    height: "100%",
                    position: "relative",

                    // border: "2px solid #d4d4d4",
                    borderRadius: "15px",
                    overflow: "hidden",
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <img
                    alt={title}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      maxHeight: "100%",
                      width: "100%",

                      // width: "100%",
                    }}
                    src={image}
                  />

                  <Typography
                    variant="subtitle1"
                    align="center"
                    style={{
                      fontWeight: 650,
                      fontSize: 24,
                      color: "white",
                      position: "absolute",
                      backdropFilter: "blur(80px)",
                      borderRadius: "3px 3px 10px 10px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      width: "100%",
                    }}
                  >
                    {" "}
                    {title}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
        {currentPage < pages.length - 2 && featured && (
          <IconButton
            aria-label="right"
            style={{ position: "absolute", zIndex: 10, right: -30 }}
            onClick={() => {
              if (currentPage < pages.length - 2) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            <RightIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Banner;
