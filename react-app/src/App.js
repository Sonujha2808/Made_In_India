// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header/Header";
// import Footer from "./Component/Footer/Footer";
// import CategorySlider from "./Component/Category";
// import CategoryPage from "./Component/CategoryPage";
// import AdminPanel from "./Component/AdminPanel";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <Routes>
//           <Route path="/" element={<CategorySlider />} />
//           <Route path="/category/:category" element={<CategoryPage />} /> {/* ✅ Dynamic category route */}
//           <Route path="/admin" element={<AdminPanel />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import CategorySlider from "./Component/CategorySlider";
import CategoryPage from "./Component/CategoryPage";
import AdminPanel from "./Component/AdminPanel";
import FeaturesSection from "./Component/Features/Features";

function Layout() {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin"; // Check if it's admin panel

  return (
    <div className="app-container">
      {!isAdminRoute && <Header />} {/* Hide Header on Admin Panel */}
      <Routes>
        <Route path="/" element={<CategorySlider />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/admin" element={<AdminPanel />} /> {/* Only AdminPanel */}
      </Routes>
      {!isAdminRoute && <FeaturesSection />} {/* Hide Features on Admin Panel */}
      {!isAdminRoute && <Footer />} {/* Hide Footer on Admin Panel */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;