import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LeftIcon from "@material-ui/icons/ChevronLeft";
import RightIcon from "@material-ui/icons/ChevronRight";
import React from "react";

import { data as productData } from "../app/data";
import Product from "../components/Product";
import { Page } from "../motion/Page";
import usePages from "../motion/usePages";

const Banner = ({ title }) => {
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
          fontWeight: 700,
          fontFamily: "'Jura', sans-serif",
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          // background: "#D0B69F",
          height: "25vh",
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
        {currentPage > 2 && (
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
        {currentPage < pages.length - 2 && (
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
