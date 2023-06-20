const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  updateProduct,
  fetchProductById,
} = require("../controller/Product");
const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchAllProducts);
router.get("/:id", fetchProductById);
router.patch("/:id", updateProduct);

exports.router = router;
