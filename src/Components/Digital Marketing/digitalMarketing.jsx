import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./digitalMarketing.css";

const tilesData = [
  { 
    id: "seo", 
    title: "Search Engine Optimization", 
    color: "golden", 
    route: "/seo", 
    description: "Boost your website's visibility and attract organic traffic with tailored SEO strategies."
  },
  { 
    id: "smm", 
    title: "Social Media Marketing", 
    color: "pink", 
    route: "/smm", 
    description: "Engage your audience and drive conversions with effective social media campaigns."
  },
  { 
    id: "content", 
    title: "Content Marketing", 
    color: "orange", 
    route: "/content", 
    description: "Attract and retain your target audience with engaging content."
  },
  { 
    id: "ppc", 
    title: "Pay Per Click", 
    color: "rose", 
    route: "/ppc", 
    description: "Drive qualified leads to your site and maximize ROI with targeted PPC campaigns."
  },
  { 
    id: "email", 
    title: "Email Marketing", 
    color: "golden", 
    route: "/email", 
    description: "Grow your business with personalized, compelling email campaigns that convert."
  },
  { 
    id: "packages", 
    title: "Special Packages", 
    color: "golden", 
    route: "/packages", 
    description: "Discover packages combining SEO, social media, and content marketing for success."
  },
];




const DigitalMarketing = () => {
  const navigate = useNavigate();
  const [selectedTile, setSelectedTile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="digitalMarketing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>Artisticify</div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/design")}>Design</button>
          <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button>
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

      {/* Tiles Section */}
      <div className="tiles-container">
        {tilesData.map((tile) => (
          <div
            key={tile.id}
            className={`tile ${tile.color}`}
            onClick={() => navigate(tile.route)}
          >
            <div className="title">{tile.title}</div>
            <div className="description">{tile.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketing;
