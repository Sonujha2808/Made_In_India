// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   category: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   imageUrl: { type: String, required: true }, // Ensure this is included
// });

// module.exports = mongoose.model("Product", ProductSchema);



const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    lowercase: true,  // ✅ Store category in lowercase
    trim: true        // ✅ Remove extra spaces
  },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
