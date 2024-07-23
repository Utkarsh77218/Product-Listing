import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Filter from "../components/Filter";
import CustomPagination from "../components/CustomPagination";

const ProductsPage = () => {
  const [productsList, setProductsList] = useState([]);
  const [company, setCompany] = useState("all");
  const [category, setCategory] = useState("all");
  const [topProducts, setTopProducts] = useState(undefined);
  const [availability, setAvailability] = useState("both");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [sort, setSort] = useState("None");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProductsData = async () => {
    let baseUrl = "http://localhost:3000/api/";
    try {
      if (company !== "all" && category !== "all") {
        baseUrl += `companies/${company}/categories/${category}/products`;
      } else if (company !== "all") {
        baseUrl += `companies/${company}/products`;
      } else if (category !== "all") {
        baseUrl += `categories/${category}/products`;
      } else {
        baseUrl += `products`;
      }
      if (topProducts) {
        baseUrl += `?top=${topProducts}`;
      }

      if (availability !== "both") {
        baseUrl +=
          (baseUrl.includes("?") ? `&` : `?`) + `availability=${availability}`;
      }

      if (minPrice) {
        baseUrl += (baseUrl.includes("?") ? `&` : `?`) + `minPrice=${minPrice}`;
      }

      if (maxPrice) {
        baseUrl += (baseUrl.includes("?") ? `&` : `?`) + `maxPrice=${maxPrice}`;
      }
      const res = await fetch(`${baseUrl}`);
      const data = await res.json();
      setProductsList(data);
    } catch (err) {
      console.log(err);
      setProductsList([]);
    }
  };

  const sortProducts = (option) => {
    let sortedList = [...productsList];
    switch (option) {
      case "low-high":
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedList.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedList = [...productsList];
    }
    setProductsList(sortedList);
  };

  useEffect(() => {
    fetchProductsData();
  }, [category, company, availability, topProducts, minPrice, maxPrice]);

  useEffect(() => {
    sortProducts(sort);
  }, [sort]);

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleTopProductsChange = (event) => {
    setTopProducts(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleCurrentPageChange = (_, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Filter
          onCompanyChange={handleCompanyChange}
          onCategoryChange={handleCategoryChange}
          onAvailabilityChange={handleAvailabilityChange}
          onTopProductsChange={handleTopProductsChange}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
          onSortChange={handleSortChange}
        />
        <Body
          productsList={productsList}
          productsLimit={12}
          currentPage={currentPage}
        />
        <Box display="flex" justifyContent="center" mt={3}>
          <CustomPagination 
            totalPages={Math.ceil(productsList.length / 12)}
            onCurrentPageChange={handleCurrentPageChange}
          />
        </Box>
      </Container>
    </>
  );
};

export default ProductsPage;
