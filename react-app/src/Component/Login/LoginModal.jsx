import React, { useState } from "react";
import "./LoginModal.css";
import loginGif from "../../Assets/login.gif";  // Import Login GIF
import signupGif from "../../Assets/man.gif";  // Import Signup GIF

const LoginModal = ({ closeModal }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>&times;</span>
        
        {/* Replace Text with GIF */}
        <h2>
          <img 
            src={isSignup ? signupGif : loginGif} 
            alt={isSignup ? "Sign Up" : "Login"} 
            className="auth-gif"
          />
        </h2>
        <form>
          {isSignup && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}  
          <span onClick={() => setIsSignup(!isSignup)} className="switch-text">
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
