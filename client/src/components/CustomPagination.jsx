import React from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({ totalPages, onCurrentPageChange }) => {
  return (
    <Pagination
      count={totalPages}
      variant="outlined"
      onChange={onCurrentPageChange}
      shape="rounded"
    />
  );
};

export default CustomPagination;
