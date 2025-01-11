import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./design.css";

const tilesData = [
  { id: "logo1", title: "Logo Design", color: "golden", route: "/logo", description: "Create a unique and memorable logo representing your brand's identity." },
  { id: "brochure", title: "Brochure Design", color: "pink", route: "/brochure", description: "Visually appealing brochure designs for marketing and promotional purposes." },
  { id: "packaging", title: "Packaging Design", color: "orange", route: "/packaging", description: "Custom packaging that enhances product appeal and protects them on the shelves." },
  { id: "flyer", title: "Flyer Design", color: "rose", route: "/flyer", description: "Design captivating flyers that clearly communicate your message for events or promotions." },
  { id: "poster", title: "Poster Design", color: "golden", route: "/poster", description: "Design attention-grabbing posters ideal for advertising events, sales, or new products." },
  { id: "exhibition", title: "Exhibition Design", color: "golden", route: "/exhibition", description: "Create exhibition booths that attract attention and showcase your brand and products." },
  { id: "uiux", title: "UI/UX Design", color: "orange", route: "/uiux", description: "Craft user-centric interfaces that are intuitive, engaging, and visually appealing." },
  { id: "icon", title: "Icon Design", color: "pink", route: "/icon", description: "Design custom icons to enhance the user interface and improve navigation." },
  { id: "stationary", title: "Stationary Design", color: "rose", route: "/stationary", description: "Design professional stationary that reinforces your brand identity across communications." },
];

const Design = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    navigate("/#contact-form-section"); // Use hash navigation to jump to the contact section
  };

  return (
    <div className="design">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>Artisticify</div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/design")}>Design</button>
          <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button>
          <button onClick={() => navigate("/our-work")}>Our Work</button>
          <button onClick={handleContactClick}>Contact</button> {/* Scroll to contact form */}
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

export default Design;
