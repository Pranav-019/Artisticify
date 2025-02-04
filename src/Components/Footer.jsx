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
                <a href="https://x.com/artisticif84962?t=3oO-cGL4IcaHzd7PU2U-1w&s=09" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-container" style={{ position: 'relative', display: 'inline-block' }}>
                    <p style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: '#1DA1F2' }}>
                   
                    </p>
                    <FaTwitter
                      className="social-icon border border-1 rounded-circle p-2 me-2"
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#1DA1F2",
                        borderColor: "#1DA1F2",
                      }}
                    />
                  </div>
                </a>

                <a href="https://www.facebook.com/share/15aWiWnmac/" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-container" style={{ position: 'relative', display: 'inline-block' }}>
                    <p style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: '#1877F2' }}>

                    </p>
                    <FaFacebookF
                      className="social-icon border border-1 rounded-circle p-2 me-2"
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#1877F2",
                        borderColor: "#1877F2",
                      }}
                    />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/artisticify-marketing-agency-685a42348" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-container" style={{ position: 'relative', display: 'inline-block' }}>
                    <p style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: '#0A66C2' }}>

                    </p>
                    <FaLinkedinIn
                      className="social-icon border border-1 rounded-circle p-2 me-2"
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#0A66C2",
                        borderColor: "#0A66C2",
                      }}
                    />
                  </div>
                </a>

                <a href="https://www.instagram.com/artisticify_00/?igsh=MWFuMG1xYnAxcmphbw%3D%3D#" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-container" style={{ position: 'relative', display: 'inline-block' }}>
                    <p style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: '#E1306C' }}>

                    </p>
                    <FaInstagram
                      className="social-icon border border-1 rounded-circle p-2 me-2"
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#E1306C",
                        borderColor: "#E1306C",
                      }}
                    />
                  </div>
                </a>

                <a href="https://api.whatsapp.com/message/O46MBZ6WXYPYA1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-container" style={{ position: 'relative', display: 'inline-block' }}>
                    <p style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: '#25D366' }}>

                    </p>
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
                </a>
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