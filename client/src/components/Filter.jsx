import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";

const Filter = ({
  onCompanyChange,
  onCategoryChange,
  onAvailabilityChange,
  onTopProductsChange,
  onMinPriceChange,
  onMaxPriceChange,
  onSortChange,
}) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [companiesList, setCompaniesList] = useState([]);

  const fetchCompaniesData = async () => {
    try {
      const res = await fetch("https://bczu0p-5173.ocws.app/api/companies/");
      const data = await res.json();
      setCompaniesList(data);
    } catch (err) {
      console.log(err);
      setCompaniesList([]);
    }
  };

  const fetchCategoriesData = async () => {
    try {
      const res = await fetch("https://bczu0p-5173.ocws.app/api/categories/");
      const data = await res.json();
      setCategoriesList(data);
    } catch (err) {
      console.log(err);
      setCategoriesList([]);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
    fetchCompaniesData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" my={5}>
      <Box display="flex" justifyContent="space-between" gap={5}>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel htmlFor="categories">Categories</InputLabel>
          <Select
            id="categories"
            label="Categories"
            defaultValue="all"
            onChange={onCategoryChange}
          >
            <MenuItem value="all">All</MenuItem>
            {categoriesList.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel htmlFor="company">Companies</InputLabel>
          <Select
            id="companies"
            label="Companies"
            defaultValue="all"
            onChange={onCompanyChange}
          >
            <MenuItem value="all">All</MenuItem>
            {companiesList.map((company) => (
              <MenuItem key={company.id} value={company.name}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel htmlFor="availability">Availability</InputLabel>
          <Select
            id="availability"
            label="Availability"
            defaultValue="both"
            onChange={onAvailabilityChange}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
            <MenuItem value="both">Both</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel htmlFor="sorting">Sort By</InputLabel>
          <Select
            defaultValue="featured"
            id="sorting"
            label="Sort By"
            onChange={onSortChange}
          >
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="low-high">Price: Low to High</MenuItem>
            <MenuItem value="high-low">Price: High to Low</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="space-between" gap={5} mt={3}>
        <FormControl>
          <InputLabel htmlFor="topProducts">Top Products</InputLabel>
          <OutlinedInput
            id="topProducts"
            label="Top Products"
            onChange={onTopProductsChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="minPrice">Min Price</InputLabel>
          <OutlinedInput
            id="minPrice"
            label="Min Price"
            onChange={onMinPriceChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="maxPrice">Max Price</InputLabel>
          <OutlinedInput
            id="maxPrice"
            label="Max Price"
            onChange={onMaxPriceChange}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filter;
