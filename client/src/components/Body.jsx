import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Body = ({ productsList, productsLimit, currentPage }) => {
  const indexOfLastItem = currentPage * productsLimit;
  const indexOfFirstItem = indexOfLastItem - productsLimit;
  const currentProducts = productsList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box>
      {currentProducts.length > 0 ? (
        <Grid container justifyContent="center" spacing={2}>
          {currentProducts.map((product) => (
            <Grid item key={product.id} xs={4}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ProductCard product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6">No data found</Typography>
      )}
    </Box>
  );
};

export default Body;
