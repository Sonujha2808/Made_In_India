const express = require("express");
const router = express.Router();
const { uploadProduct, getAllProducts, getProductsByCategory } = require("../controllers/ProductController");
const upload = require("../middleware/uploadMiddleware");

// ✅ Upload a product
router.post("/", upload.single("image"), uploadProduct);

// ✅ Get all products
router.get("/all", getAllProducts);

// ✅ Get products by category
router.get("/", getProductsByCategory); // Changed from /category to / to match frontend API call

module.exports = router;
