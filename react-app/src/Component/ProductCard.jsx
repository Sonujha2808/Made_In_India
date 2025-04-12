import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center", width: "200px" }}>
      <img 
        src={product.imageUrl} // ✅ Fetch image from MongoDB (Cloudinary URL)
        alt={product.name} 
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
