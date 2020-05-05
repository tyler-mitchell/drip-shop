import React from "react";
import { List, ListItem, Grid, Container } from "@material-ui/core";
import { data } from "../../app/data";
import Product from "../../components/Product";
import Banner from "../../components/Banner";
const StoreView = () => {
  return (
    <>
      <Banner />
      <Container maxWidth="md">
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          {data.map((d, index) => (
            <Grid item key={index} xs={4}>
              <Product id={"shirt" + index} {...d} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default StoreView;
