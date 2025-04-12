// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProductsByCategory } from "./Services/api";
// import ProductCard from "./ProductCard";

// const CategoryPage = () => {
//   const { category } = useParams(); // ✅ Get category from URL
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       const fetchedProducts = await getProductsByCategory(category);
//       setProducts(fetchedProducts);
//       setLoading(false);
//     };

//     fetchProducts();
//   }, [category]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{category} Products</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : products.length > 0 ? (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//           {products.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p>No products found in this category.</p>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "./Services/api";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const fetchedProducts = await getProductsByCategory(category);
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{category} Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
