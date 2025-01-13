import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHome,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="py-4 foot text-white" style={{ backgroundColor: "#333" }}>
      <Container>
        <Row className="gy-4 py-3">
          {/* Office Address */}
          <Col md={3} sm={6}>
            <div className="line-h">
              <h5>Office Address</h5>
              <p>
                <FaHome /> 3rd Floor, 307
              </p>
              <p>Amanora Chamber, Amanora Mall</p>
              <p>Hadapsar, Pune - 411028</p>
              <p>Maharashtra</p>
              <p>
                <FaPhoneAlt /> +91-9112452929
              </p>
              <p>
                <MdEmail /> info@artisticify.com
              </p>
              <div className="mt-3">
                <FaTwitter className="social-icon me-2" />
                <FaFacebookF className="social-icon me-2" />
                <FaLinkedinIn className="social-icon me-2" />
                <FaInstagram className="social-icon me-2" />
                <IoLogoWhatsapp className="social-icon me-2" />
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/design" className="text-decoration-none text-white">
                  Design
                </a>
              </li>
              <li>
                <a
                  href="/digital-marketing"
                  className="text-decoration-none text-white"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="/our-work"
                  className="text-decoration-none text-white"
                >
                  Our Work
                </a>
              </li>
            </ul>
          </Col>

          {/* Business Hours */}
          <Col md={3} sm={6}>
            <h5>Business Hours</h5>
            <p>Monday - Saturday</p>
            <p>09:00 AM - 07:00 PM</p>
            <p>Sunday: Closed</p>
          </Col>

          {/* Newsletter */}
          <Col md={3} sm={6}>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter to stay updated!</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mb-2"
              />
              <button className="btn btn-primary w-100">Subscribe</button>
            </form>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          Artisticify | 2025 | All Rights Reserved | Digital Marketing | Social
          Marketing | Web Development | Graphic Design
        </p>
      </Container>
    </div>
  );
};

export default Footer;
