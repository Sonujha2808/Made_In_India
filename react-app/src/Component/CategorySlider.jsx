// import React from "react";
// import Slider from "react-slick";
// import { useNavigate } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Category.css";

// const categories = [
//   { name: "Laptop", image: "https://res.cloudinary.com/decfdokvc/image/upload/v1737741399/table5_un8dbw.jpg" },
//   { name: "Phone", image: "https://res.cloudinary.com/decfdokvc/image/upload/v1737741368/chair1_wgs3tq.jpg" },
//   { name: "Watch", image: "https://res.cloudinary.com/decfdokvc/image/upload/v1737741380/sofa2_ym5ego.jpg" },
//   { name: "Camera", image: "/images/camera.png" },
//   { name: "Headphone", image: "/images/headphone.png" },
//   { name: "Video Game", image: "/images/video-game.png" },
// ];

// const CategorySlider = () => {
//   const navigate = useNavigate();

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <div className="arrow next">→</div>,
//     prevArrow: <div className="arrow prev">←</div>,
//   };

//   const handleCategoryClick = (category) => {
//     navigate(`/category/${category.toLowerCase()}`);
//   };

//   return (
//     <div className="category-slider">
//       <h2>Browse by Category</h2>
//       <Slider {...settings}>
//         {categories.map((cat, index) => (
//           <div key={index} className="category-card" onClick={() => handleCategoryClick(cat.name)}>
//             <img src={cat.image} alt={cat.name} />
//             <p>{cat.name}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CategorySlider;



import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";

const categories = ["Laptop", "Phone", "Watch", "Camera", "Headphone", "Video Game"];

const CategorySlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="category-slider">
      <h2>Browse by Category</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => navigate(`/category/${category.toLowerCase()}`)}>
            <p>{category}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
