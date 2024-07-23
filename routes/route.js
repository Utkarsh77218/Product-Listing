import express from "express";
import {
  categoryList,
  companyList,
  products,
  category,
  company,
  companyAndCategory,
} from "../controllers/controller.js";

const router = express.Router();

router.get(
  "/companies/:companyName/categories/:categoryName/products",
  companyAndCategory
);
router.get("/companies/:companyName/products", company);
router.get("/categories/:categoryName/products", category);
router.get("/categories", categoryList);
router.get("/companies", companyList);
router.get("/products", products);

export default router;
