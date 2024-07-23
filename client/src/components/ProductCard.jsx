import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        
        <Typography variant="h4">{product.productName}</Typography>
        <Typography variant="h6">{product.category}</Typography>
        <Typography variant="subtitle2">Company : {product.company}</Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2">Rating: {product.rating}</Typography>
          <StarIcon sx={{ ml: 0.5, color: "gold" }} />
        </Box>
        <Typography variant="body2">Price: ${product.price}</Typography>
        <Typography variant="body2">Discount: {product.discount}%</Typography>
        <Typography variant="body2">Availability: {product.availability.toUpperCase()}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
