import React from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({ totalPages, onCurrentPageChange }) => {
  return <Pagination count={totalPages} variant="outlined" />;
};

export default CustomPagination;
