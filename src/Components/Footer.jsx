import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  py-4 foot text-dark" style={{paddingTop:"200px"}}>
      <Container>
        <Row className="gy-4 py-3 ">
          {/* Office Address */}
          <Col md={3} sm={6}>
            <div className="line-h">
              <div>
              <span className="text">
                <FaHome /> 3rd Floor, 307
              </span>

              <p className="">Amanora Chamber, Amanora Mall</p>
              <p>Hadapsar, Pune - 411028</p>
              <p>Maharashtra</p>
              <span className="text">
                <FaPhoneAlt /> +91-9112452929
              </span>
              {/* <p>Phone: +91-9112452929</p> */}
              <p className="text">
                <MdEmail /> info@artisticify.com
              </p>
              </div>
              <div className="mt-2">
                <FaTwitter
                  className="border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#1DA1F2", // Twitter's original color
                    borderColor: "#1DA1F2", // Optional: Match the border color with Twitter blue
                  }}
                />

                <FaFacebookF
                  className="border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#1877F2", // Facebook's official color
                    borderColor: "#1877F2", // Optional: Match the border color
                  }}
                />

                <FaLinkedinIn
                  className="border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#0A66C2", // LinkedIn's official color
                    borderColor: "#0A66C2", // Optional: Match the border color
                  }}
                />

                <FaInstagram
                  className="border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#E1306C", // Instagram's pink gradient color as the base
                    borderColor: "#E1306C", // Optional: Match the border color
                  }}
                />

                <FaYoutube
                  className="border border-1 rounded-circle p-2 me-2"
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "#FF0000", // YouTube's official red
                    borderColor: "#FF0000", // Optional: Match the border color
                  }}
                />
              </div>
              {/* <p>Email: info@artisticify.com</p> */}
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6}>
            <h5>Quick Links</h5>

            <div className="line-h ">
              <p>
                <a href="/" className=" text-decoration-none text-dark">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className=" text-decoration-none text-dark">
                  About
                </a>
              </p>
              <p>
                <a href="/design" className=" text-decoration-none text-dark">
                  Design
                </a>
              </p>
              <p>
                <a
                  href="/digital-marketing"
                  className=" text-decoration-none text-dark"
                >
                  Digital Marketing
                </a>
              </p>
              <p>
                <a href="/our-work" className=" text-decoration-none text-dark">
                  Our Work
                </a>
              </p>
            </div>
          </Col>

          {/* Business Hours */}
          <Col md={3} sm={6}>
            <div className="line-h">
              <h5 className="pb-2">Business Hours</h5>
              <p>Monday - Saturday</p>
              <p>09:00 AM - 07:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </Col>

          {/* Newsletter */}
          <Col md={3} sm={6}>
            <div className="line-h">
              <h5 className="pb-2">Newsletter</h5>
              <p>We are the best</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
