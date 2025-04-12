// import React, { useState } from "react";
// import { uploadProduct } from "./Services/api";

// const AdminPanel = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     category: "",
//     description: "",
//     price: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setProduct({ ...product, image: e.target.files[0] }); // ✅ Fix: Store file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting Product:", product); // ✅ Debugging Step
//     const result = await uploadProduct(product);
//     console.log("Upload Response:", result); // ✅ Debugging Step
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//       <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
//       <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
//       <textarea name="description" placeholder="Description" onChange={handleChange} required />
//       <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
//       <input type="file" accept="image/*" onChange={handleImageChange} required /> {/* ✅ Fix */}
//       <button type="submit">Upload Product</button>
//     </form>
//   );
// };

// export default AdminPanel;

import React, { useState } from "react";
import { uploadProduct } from "./Services/api";

const AdminPanel = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: null,
  });

  const categories = ["Laptop", "Phone", "Watch", "Camera", "Headphone", "Video Game"];

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name || !product.category || !product.price || !product.image) {
      alert("Please fill all fields before submitting!");
      return;
    }

    console.log("Submitting Product:", product);
    const result = await uploadProduct(product);

    if (result.success) {
      alert("Product uploaded successfully!");
      setProduct({
        name: "",
        category: "",
        description: "",
        price: "",
        image: null,
      });
    } else {
      alert("Error uploading product: " + result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
      
      <select name="category" onChange={handleChange} required>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="file" accept="image/*" onChange={handleImageChange} required />
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default AdminPanel;
