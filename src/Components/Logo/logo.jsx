import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./logo.css";
import logos from "./logo-assets/logos-2.jpeg";

const Logo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  // Initial package data
  const initialPackages = [
    {
      name: "Basic",
      description: "Perfect for startups and small businesses",
      features: [
        "Professional logo design",
        "1 logo concept",
        "2 rounds of revisions",
        "High-quality vector files",
        "Basic brand guidelines",
        "Fast delivery in 5 business days",
        "Dedicated support during the process",
      ],
    },
    {
      name: "Standard",
      description: "Ideal for growing businesses with more needs",
      features: [
        "Custom logo design",
        "2 logo concepts",
        "3 rounds of revisions",
        "High-quality vector files",
        "Branding guideline booklet",
        "Delivery in 7 business days",
        "Priority support during the process",
      ],
    },
    {
      name: "Premium",
      description: "For established businesses looking for premium services",
      features: [
        "Exclusive logo design",
        "3 unique logo concepts",
        "Unlimited revisions",
        "High-quality vector and raster files",
        "Complete brand identity guide",
        "Delivery in 10 business days",
        "Full support and consultation",
      ],
    },
  ];

  useEffect(() => {
    setPackages(initialPackages); // Load initial packages
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

  const loadMorePackages = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setPackages((prev) => [
        ...prev,
        ...initialPackages.map((pkg) => ({
          ...pkg,
          name: `${pkg.name} (New)`,
        })),
      ]);
      setLoading(false);
    }, 1000); // Simulate loading delay
  };

  return (
    <div className="Logo">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-title" onClick={() => handleNavigation("/")}>Artisticify</div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => handleNavigation("/home")} aria-label="Go to Home">
            Home
          </button>
          <button onClick={() => handleNavigation("/about")} aria-label="Learn About Us">
            About
          </button>
          <button onClick={() => handleNavigation("/design")} aria-label="View Designs">
            Design
          </button>
          <button
            onClick={() => handleNavigation("/digitalMarketing")}
            aria-label="Explore Digital Marketing"
          >
            Digital Marketing
          </button>
          <button onClick={() => handleNavigation("/our-work")} aria-label="View Our Work">
            Our Work
          </button>
          <button onClick={() => handleNavigation("/contact")} aria-label="Contact Us">
            Contact
          </button>
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

      {/* Scrollable Content */}
      <div className="scrollable-content">
        {/* Logo Image */}
        <div className="logo-image">
          <img src={logos} alt="Artisticify Logo" />
        </div>

        {/* Package Section */}
        <div className="packages" style={{height:"auto"}}>
          {packages.map((pkg, index) => (
            <div className="package" key={index}>
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
        <div ref={loaderRef} className="loader">
          {loading ? "Loading more packages..." : "Scroll down for more packages"}
        </div>
      </div>
    </div>
  );
};

export default Logo;
