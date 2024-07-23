import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h4" fontWeight="bold">
        <Box>Products</Box>
      </Typography>
    </Stack>
  );
};

export default Navbar;
