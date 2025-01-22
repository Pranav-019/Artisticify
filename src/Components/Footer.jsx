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
                <a href="/FAQs" className="text-decoration-none text-white">
                 FAQs
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