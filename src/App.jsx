import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import statueImage from "./assets/homepage-bg.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import Design from "./Components/Design/design";
import About from "./Components/About/about";
import OurWork from "./Components/Our - Work/our_work";
import Home from "./Components/Home/home";
import DigitalMarketing from "./Components/Digital Marketing/digitalMarketing";

// Tiles
import Logo from "./Components/Logo/logo";
import Packaging from "./Components/Packaging/packaging";
import Poster from "./Components/Poster/poster";
import Icon from "./Components/Icon/icon";
import Stationary from "./Components/Stationary/stationary";
import Flyer from "./Components/Flyer/flyer";
import Exhibition from "./Components/Exibition/exibition";
import Brochure from "./Components/Brochure/brochure";
import UIUX from "./Components/UIUX/uiux";
import Footer from "./Components/Footer";

const ContactSection = () => (
  <div className="contact-section">
    <div className="contact-bar phone-bar">
      <i className="fa fa-phone contact-icon"></i>
      <span className="bar-text">+1-234-567-890</span>
    </div>
    <div className="contact-bar email-bar">
      <i className="fa fa-envelope contact-icon"></i>
      <span className="bar-text">dummy@example.com</span>
    </div>
  </div>
);

const App = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    serviceSelected: "",
    message: ""
  });
  const [acknowledgmentMessage, setAcknowledgmentMessage] = useState(""); // New state for acknowledgment message

  // Create a reference to the contact form section
  const contactFormRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setAcknowledgmentMessage("Message sent successfully!"); // Set acknowledgment message
        setFormData({ // Reset form fields
          name: "",
          email: "",
          address: "",
          city: "",
          phone: "",
          serviceSelected: "",
          message: "Pl let me know about the design services."
        });
      } else {
        setAcknowledgmentMessage("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setAcknowledgmentMessage("Error sending message. Please try again.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".bottom-images-container");
      if (container) {
        const containerPosition = container.getBoundingClientRect();
        container.classList.toggle("scrolled", containerPosition.top <= window.innerHeight && containerPosition.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the contact form section
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Artisticify</div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/design")}>Design</button>
          <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button>
          <button onClick={() => navigate("/our-work")}>Our Work</button>
          <button onClick={scrollToContactForm}>Contact</button> {/* Scroll to contact form */}
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

      <main className="hero-section">
        <h1 className="hero-title">Bring Your Imagination To Life</h1>
        <div className="hero-image-container">
          <div className="yellow-accent yellow-accent-1"></div>
          <div className="yellow-accent yellow-accent-2"></div>
          <div className="yellow-accent yellow-accent-3"></div>
          <div className="yellow-accent yellow-accent-4"></div>
          <div className="yellow-accent yellow-accent-5"></div>
          <img src={statueImage} alt="Artistic statue with sunglasses" className="hero-image" />
        </div>

        {/* <section className="form-section" ref={contactFormRef}>
          <h2 className="form-title">Let's Get in Touch</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="serviceSelected">Service Selected</label>
              <input
                type="text"
                id="serviceSelected"
                name="serviceSelected"
                placeholder="Enter the service selected"
                value={formData.serviceSelected}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>

          {acknowledgmentMessage && <div className="acknowledgment-message">{acknowledgmentMessage}</div>} {/* Show acknowledgment message 
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Artisticify</h4>
            <p>We bring your creative ideas to life with professional design and development services.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/design">Design</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: dummy@example.com</p>
            <p>Phone: +1-234-567-890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Artisticify. All Rights Reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<App />} />
      <Route path="/design" element={<Design />} />
      <Route path="/digitalMarketing" element={<DigitalMarketing />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/brochure" element={<Brochure />} />
      <Route path="/packaging" element={<Packaging />} />
      <Route path="/flyer" element={<Flyer />} />
      <Route path="/poster" element={<Poster />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/uiux" element={<UIUX />} />
      <Route path="/icon" element={<Icon />} />
      <Route path="/stationary" element={<Stationary />} />
    </Routes>
    <Footer/>
  </Router>
);

export default Root;
