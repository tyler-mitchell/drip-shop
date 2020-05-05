import React from "react";
import Typography from "@material-ui/core/Typography";
import usePages from "../motion/usePages";
import { Page } from "../motion/Page";

const Banner = () => {
  const pages = usePages();
  const [currentPage, setCurrentPage] = React.useState(3);
  return (
    <div
      style={{
        background: "#D0B69F",
        height: "25vh",
        width: "100%",
        marginBottom: "30px",
        borderRadius: "10px",
        padding: "30px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Page
          currentPage={currentPage}
          onChangePage={(index) => {
            setCurrentPage(index);
          }}
          style={{
            height: 400,
            width: 800,
            borderRadius: 20,
            backgroundColor: "rgba(255, 255, 255, .1)",
          }}

          // scale={0.5}
        >
          {pages}
        </Page>
        {/* <div
          style={{
            padding: "16px 0px",
            width: 200,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            Prev
          </button>
          {currentPage + 1}
          <button
            onClick={() => {
              if (currentPage < pages.length - 1) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
