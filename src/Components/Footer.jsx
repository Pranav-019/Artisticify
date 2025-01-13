import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHome,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="py-4 foot text-white">
=======
    <div className="  py-4 foot text-dark" style={{paddingTop:"200px"}}>
>>>>>>> 7c5b665a341abf84103c9d66117114600ba977da
      <Container>
        <Row className="gy-4 py-3 ">
          {/* Office Address */}
          <Col md={3} sm={6} className="px-3">
            <div className="line-h">
              <div>
                <span className="text">
                  <FaHome /> 3rd Floor, 307
                </span>
                <p>Amanora Chamber, Amanora Mall</p>
                <p>Hadapsar, Pune - 411028</p>
                <p>Maharashtra</p>
                <span className="text">
                  <FaPhoneAlt /> +91-9112452929
                </span>
                <p className="text">
                  <MdEmail /> info@artisticify.com
                </p>
              </div>

              <div className="mt-2">
                <FaTwitter
                  className="social-icon border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#1DA1F2",
                    borderColor: "#1DA1F2",
                  }}
                />
                <FaFacebookF
                  className="social-icon border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#1877F2",
                    borderColor: "#1877F2",
                  }}
                />
                <FaLinkedinIn
                  className="social-icon border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#0A66C2",
                    borderColor: "#0A66C2",
                  }}
                />
                <FaInstagram
                  className="social-icon border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#E1306C",
                    borderColor: "#E1306C",
                  }}
                />
                <IoLogoWhatsapp
                  className="social-icon border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#25D366",
                    borderColor: "#25D366",
                  }}
                />
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6} className="px-3">
            <h5>Quick Links</h5>
            <div className="line-h text-white">
              <p>
                <a href="/" className="text-decoration-none text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-decoration-none text-white">
                  About
                </a>
              </p>
              <p>
                <a href="/design" className="text-decoration-none text-white">
                  Design
                </a>
              </p>
              <p>
                <a
                  href="/digital-marketing"
                  className="text-decoration-none text-white"
                >
                  Digital Marketing
                </a>
              </p>
              <p>
                <a href="/our-work" className="text-decoration-none text-white">
                  Our Work
                </a>
              </p>
            </div>
          </Col>

          {/* Business Hours */}
          <Col md={3} sm={6} className="px-3">
            <div className="line-h">
              <h5 className="pb-2">Business Hours</h5>
              <p>Monday - Saturday</p>
              <p>09:00 AM - 07:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </Col>

          {/* Newsletter */}
          <Col md={3} sm={6} className="px-3">
            <div className="line-h">
              <h5 className="pb-2">Newsletter</h5>
              <p>We are the best</p>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center ">Artisticify | 2025 | All Rights Reserved | Digital Marketing | Social Marketing | Web Development | Graphic Design</p>
      </Container>
    </div>
  );
};

export default Footer;
