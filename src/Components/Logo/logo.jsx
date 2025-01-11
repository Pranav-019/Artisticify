import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./logo.css";
import logos from './logo-assets/logos-2.jpeg';

const Logo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to handle visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show description after 500ms
    }, 500); // Adjust delay here
    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);

  return (
    <div className="Logo">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-title" onClick={() => navigate("/")}>
          Artisticify
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/design")}>Design</button>
          <button onClick={() => navigate("/digitalMarketing")}>
            Digital Marketing
          </button>
          <button onClick={() => navigate("/our-work")}>Our Work</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Logo Design Description */}
      <div className={`logo-description ${isVisible ? "visible" : ""}`}>
        <div className="description-part description-left">
          Our logo design services focus on creating unique and memorable brand identities.
        </div>
        <div className="description-part description-right">
          Let us craft a logo that truly represents your business and leaves a lasting impression.
        </div>
      </div>

      {/* Logo Image */}
      <div className="logo-image">
        <img src={logos} alt="Artisticify Logo" />
      </div>

      {/* Package Section */}
      <div className="packages">
        <div className="package">
          <h3>Basic</h3>
          <p>Perfect for startups and small businesses</p>
          <ul>
            <li>Professional logo design</li>
            <li>1 logo concept</li>
            <li>2 rounds of revisions</li>
            <li>High-quality vector files</li>
            <li>Basic brand guidelines</li>
            <li>Fast delivery in 5 business days</li>
            <li>Dedicated support during the process</li>
          </ul>
          <button>Buy Now</button>
        </div>
        <div className="package">
          <h3>Standard</h3>
          <p>Ideal for growing businesses with more needs</p>
          <ul>
            <li>Custom logo design</li>
            <li>2 logo concepts</li>
            <li>3 rounds of revisions</li>
            <li>High-quality vector files</li>
            <li>Branding guideline booklet</li>
            <li>Delivery in 7 business days</li>
            <li>Priority support during the process</li>
          </ul>
          <button>Buy Now</button>
        </div>
        <div className="package">
          <h3>Premium</h3>
          <p>For established businesses looking for premium services</p>
          <ul>
            <li>Exclusive logo design</li>
            <li>3 unique logo concepts</li>
            <li>Unlimited revisions</li>
            <li>High-quality vector and raster files</li>
            <li>Complete brand identity guide</li>
            <li>Delivery in 10 business days</li>
            <li>Full support and consultation</li>
          </ul>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Logo;
