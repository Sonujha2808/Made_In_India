import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css"; 
import LoginModal from "../Login/LoginModal";  // Import the Login Modal Component
import userIcon from "../../Assets/profile.gif"; 
import userIcon2 from "../../Assets/search.gif";  

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Make In India</span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Category</a>
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <div className="header-icons">
          <img src={userIcon2} alt="Search" className="icon user-gif" />
          <div className="cart-container">
            <FaShoppingCart className="icon" />
            <span className="cart-count">7</span>
          </div>
          {/* Clicking this opens the login modal */}
          <img 
            src={userIcon} 
            alt="User" 
            className="icon user-gif" 
            onClick={() => setShowModal(true)} 
            style={{ cursor: "pointer" }} 
          />
        </div>
      </header>

      {/* Show the Login Modal when clicked */}
      {showModal && <LoginModal closeModal={() => setShowModal(false)} />}
    </>
  );
};

export default Header;
