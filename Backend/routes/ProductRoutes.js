// const express = require("express");
// const router = express.Router();
// const { uploadProduct, getAllProducts, getProductsByCategory } = require("../controllers/ProductController");
// const upload = require("../middleware/uploadMiddleware");

// // ✅ Upload a product (Ensure this route is accessible)
// router.post("/", upload.single("image"), uploadProduct);

// // ✅ Get all products
// router.get("/all", getAllProducts);

// // ✅ Get products by category
// router.get("/", getProductsByCategory);

// module.exports = router;




const express = require("express");
const router = express.Router();
const { uploadProduct, getAllProducts, getProductsByCategory } = require("../controllers/ProductController");
const upload = require("../middleware/uploadMiddleware");

// ✅ Upload a product
router.post("/", upload.single("image"), uploadProduct);

// ✅ Get all products
router.get("/all", getAllProducts);

// ✅ Get products by category (Corrected route)
router.get("/category", getProductsByCategory);

module.exports = router;
