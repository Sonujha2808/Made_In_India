import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/all")
      .then((res) => {
        setProducts(res.data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.imageUrl} alt={product.name} width="200px" />
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ₹{product.price}</p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;




// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products/all")
//       .then((res) => {
//         console.log("✅ Products received:", res.data);
//         setProducts(res.data);
//       })
//       .catch((err) => console.error("❌ Error fetching products:", err));
//   }, []);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <div className="product-grid">
//         {products.length === 0 ? (
//           <p>⚠ No products available</p>
//         ) : (
//           products.map((product) => (
//             <div key={product._id} className="product-card">
//               <h3>{product.name}</h3>
//               <p>Category: {product.category}</p>
//               <p>Price: ₹{product.price}</p>

//               {/* ✅ Debugging Image Display */}
//               <p>Image URL: {product.imageUrl}</p>
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 width="200px"
//                 onError={(e) => {
//                   e.target.src = "/fallback-image.jpg"; // Use a fallback image
//                   console.error("❌ Image failed to load:", product.imageUrl);
//                 }}
//               />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
