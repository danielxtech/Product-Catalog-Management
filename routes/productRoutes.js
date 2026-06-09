//routes/productRoutes.js

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  productStats
} = require("../controllers/productController");

router.post("/", authMiddleware, createProduct);

router.get("/", getProducts);

router.get("/search", searchProducts);

router.get("/stats", productStats);

router.get("/:id", getProductById);

router.put("/:id", authMiddleware, updateProduct);

router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;