import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./logo.css"; // Ensure your CSS file path is correct
import logos from "./logo-assets/logos-2.jpeg"; // Ensure your image path is correct

const Logo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetchPackages(); // Fetch package data on component mount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMorePackages();
        }
      },
      { threshold: 1.0 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const fetchPackages = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/packages");
      const data = await response.json();

      // Filter packages where category is 'logo'
      const logoPackages = data.filter(pkg => pkg.category === 'logo');

      // Limit the packages to 3 (Basic, Standard, Premium)
      setPackages(logoPackages.slice(0, 3));
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const loadMorePackages = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      fetchPackages(); // Re-fetch packages to simulate loading more
      setLoading(false);
    }, 1000); // Simulate loading delay
  };

  return (
    <div className="Logo">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-title" onClick={() => handleNavigation("/")}>
          Artisticify
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => handleNavigation("/home")} aria-label="Go to Home">Home</button>
          <button onClick={() => handleNavigation("/about")} aria-label="Learn About Us">About</button>
          <button onClick={() => handleNavigation("/design")} aria-label="View Designs">Design</button>
          <button onClick={() => handleNavigation("/digitalMarketing")} aria-label="Explore Digital Marketing">Digital Marketing</button>
          <button onClick={() => handleNavigation("/our-work")} aria-label="View Our Work">Our Work</button>
          <button onClick={() => handleNavigation("/contact")} aria-label="Contact Us">Contact</button>
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
        <div className="container">
          <div className="row">
            {/* Left Description */}
            <div className="col-12 col-md-6 description-part description-left py-5">
              <div>
                <i className="fas fa-pen-fancy"></i>
              </div>
              <p className="p">
                Our logo design services focus on creating unique and memorable brand
                identities.
              </p>
            </div>

            {/* Right Description */}
            <div className="col-12 col-md-6 description-part description-right py-5">
              <div>
                <i className="fas fa-briefcase"></i>
              </div>
              <p>
                Let us craft a logo that truly represents your business and leaves a
                lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="content-container">
        {/* Logo Image */}
        {/* <div className="logo-image">
          <img src={logos} alt="Artisticify Logo" className="img-fluid" />
        </div> */}

        {/* Package Section */}
        <div className="packages">
          {packages.map((pkg, index) => (
            <div className="package mb-3" key={index}>
              <h3 className="text-center">{pkg.name}</h3>
              <p>{pkg.description}</p>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="pck-btn rounded-pill d-flex justify-content-center mx-auto">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
