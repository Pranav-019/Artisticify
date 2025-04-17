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
import { useEffect, useState } from "react";

const Footer = () => {
  const fallbackLinks = {
    whatsapp: "https://api.whatsapp.com/message/O46MBZ6WXYPYA1?autoload=1&app_absent=0",
    twitter: "https://x.com/artisticif84962?t=3oO-cGL4IcaHzd7PU2U-1w&s=09",
    instagram: "https://www.instagram.com/artisticify_00/?igsh=MWFuMG1xYnAxcmphbw%3D%3D",
    linkedin: "https://www.linkedin.com/in/artisticify-marketing-agency-685a42348",
    facebook: "https://www.facebook.com/share/15aWiWnmac/"
  };

  const [socialLinks, setSocialLinks] = useState(fallbackLinks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch("https://artisticify-backend.vercel.app/api/social/get");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Raw API Response:", data);

        if (data && data.links && typeof data.links === "object") {
          const updatedLinks = {
            whatsapp: data.links.whatsapp && data.links.whatsapp.trim() !== "" ? data.links.whatsapp : fallbackLinks.whatsapp,
            twitter: data.links.twitter && data.links.twitter.trim() !== "" ? data.links.twitter : fallbackLinks.twitter,
            instagram: data.links.instagram && data.links.instagram.trim() !== "" ? data.links.instagram : fallbackLinks.instagram,
            linkedin: data.links.linkedin && data.links.linkedin.trim() !== "" ? data.links.linkedin : fallbackLinks.linkedin,
            facebook: data.links.facebook && data.links.facebook.trim() !== "" ? data.links.facebook : fallbackLinks.facebook,
          };
          setSocialLinks(updatedLinks);
          console.log("Set Social Links:", updatedLinks);
        } else {
          console.error("API returned invalid data or missing 'links' property:", data);
          setSocialLinks(fallbackLinks); // Use fallback if structure is wrong
        }
      } catch (error) {
        console.error("Failed to fetch social links:", error.message);
        setSocialLinks(fallbackLinks); // Use fallback on error
      } finally {
        setLoading(false);
      }
    };

    fetchSocialLinks();
  }, []);

  const handleSocialClick = (url, platform) => {
    if (!url || url.trim() === "") {
      console.warn(`No valid URL found for ${platform}`);
      return;
    }
    const validUrl = url.startsWith("http") ? url : `https://${url}`;
    console.log(`Opening ${platform} URL: ${validUrl}`);
    window.open(validUrl, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return <div>Loading social links...</div>;
  }

  return (
    <div className="py-4 foot text-white" style={{ backgroundColor: "#333" }}>
      <Container fluid className="px-4">
  <Row className="gy-4 py-4">
    {/* Office Address */}
    <Col xs={12} sm={6} md={6} lg={3}>
      <div className="line-h">
        <h5>Office Address</h5>
        <p><FaHome /> 3rd Floor, 307</p>
        <p>Amanora Chamber, Amanora Mall</p>
        <p>Hadapsar, Pune - 411028</p>
        <p>Maharashtra</p>
        <p><FaPhoneAlt /> +91-9112452929</p>
        <p><MdEmail /> info@artisticify.com</p>
        <div className="mt-3 d-flex flex-wrap">
          {/* Twitter */}
          <div
            className="social-icon-container me-2 mb-2"
            style={{
              cursor: socialLinks.twitter ? "pointer" : "not-allowed",
              opacity: socialLinks.twitter ? 1 : 0.5,
            }}
            onClick={() => socialLinks.twitter && handleSocialClick(socialLinks.twitter, "Twitter")}
          >
            <FaTwitter
              className="social-icon border border-1 rounded-circle p-2"
              style={{
                width: "35px",
                height: "35px",
                color: "#1DA1F2",
                borderColor: "#1DA1F2",
              }}
            />
          </div>

          {/* Facebook */}
          <div
            className="social-icon-container me-2 mb-2"
            style={{
              cursor: socialLinks.facebook ? "pointer" : "not-allowed",
              opacity: socialLinks.facebook ? 1 : 0.5,
            }}
            onClick={() => socialLinks.facebook && handleSocialClick(socialLinks.facebook, "Facebook")}
          >
            <FaFacebookF
              className="social-icon border border-1 rounded-circle p-2"
              style={{
                width: "35px",
                height: "35px",
                color: "#1877F2",
                borderColor: "#1877F2",
              }}
            />
          </div>

          {/* LinkedIn */}
          <div
            className="social-icon-container me-2 mb-2"
            style={{
              cursor: socialLinks.linkedin ? "pointer" : "not-allowed",
              opacity: socialLinks.linkedin ? 1 : 0.5,
            }}
            onClick={() => socialLinks.linkedin && handleSocialClick(socialLinks.linkedin, "LinkedIn")}
          >
            <FaLinkedinIn
              className="social-icon border border-1 rounded-circle p-2"
              style={{
                width: "35px",
                height: "35px",
                color: "#0A66C2",
                borderColor: "#0A66C2",
              }}
            />
          </div>

          {/* Instagram */}
          <div
            className="social-icon-container me-2 mb-2"
            style={{
              cursor: socialLinks.instagram ? "pointer" : "not-allowed",
              opacity: socialLinks.instagram ? 1 : 0.5,
            }}
            onClick={() => socialLinks.instagram && handleSocialClick(socialLinks.instagram, "Instagram")}
          >
            <FaInstagram
              className="social-icon border border-1 rounded-circle p-2"
              style={{
                width: "35px",
                height: "35px",
                color: "#E1306C",
                borderColor: "#E1306C",
              }}
            />
          </div>

          {/* WhatsApp */}
          <div
            className="social-icon-container me-2 mb-2"
            style={{
              cursor: socialLinks.whatsapp ? "pointer" : "not-allowed",
              opacity: socialLinks.whatsapp ? 1 : 0.5,
            }}
            onClick={() => socialLinks.whatsapp && handleSocialClick(socialLinks.whatsapp, "WhatsApp")}
          >
            <IoLogoWhatsapp
              className="social-icon border border-1 rounded-circle p-2"
              style={{
                width: "35px",
                height: "35px",
                color: "#25D366",
                borderColor: "#25D366",
              }}
            />
          </div>
        </div>
      </div>
    </Col>

    {/* Quick Links 1 */}
    <Col xs={6} sm={6} md={3} lg={2}>
      <h5>Quick Links</h5>
      <ul className="list-unstyled">
        <li><a href="/" className="text-decoration-none text-white">Home</a></li>
        <li><a href="/about" className="text-decoration-none text-white">About</a></li>
        <li><a href="/FAQs" className="text-decoration-none text-white">FAQs</a></li>
        <li><a href="/our-work" className="text-decoration-none text-white">Our Work</a></li>
        <li><a href="/Terms.pdf" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">Terms of use</a></li>
        <li><a href="/Privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">Privacy Policy</a></li>
        <li><a href="/Refund.pdf" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">Refund Policy</a></li>
      </ul>
    </Col>

    {/* Quick Links 2 */}
    <Col xs={6} sm={6} md={3} lg={2}>
      <h5>Services</h5>
      <ul className="list-unstyled">
        <li><a href="/SearchEngine" className="text-decoration-none text-white">SEO</a></li>
        <li><a href="/SocialMedia" className="text-decoration-none text-white">Social Media</a></li>
        <li><a href="/ContentMarketing" className="text-decoration-none text-white">Content Marketing</a></li>
        <li><a href="/PayPer" className="text-decoration-none text-white">Pay Per Click</a></li>
        <li><a href="/Googlemybusiness" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">Google My Business</a></li>
        <li><a href="/SpecialPAckages" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">Special Packages</a></li>
       
      </ul>
    </Col>

    {/* Business Hours */}
    <Col xs={12} sm={6} md={6} lg={2}>
      <h5>Business Hours</h5>
      <p>Monday - Saturday</p>
      <p>09:00 AM - 07:00 PM</p>
      <p>Sunday: Closed</p>
    </Col>

    {/* Newsletter */}
    <Col xs={12} sm={6} md={6} lg={3}>
      <h5>Newsletter</h5>
      <p>Subscribe to our newsletter to stay updated!</p>
      {/* Optional: You can add an input and button here for email subscription */}
    </Col>
  </Row>
  <hr />
  <p className="text-center mt-3">
    FTFL Technologies | 2025 | All Rights Reserved | Digital Marketing | Social
    Marketing | Web Development | Graphic Design
  </p>
</Container>

    </div>
  );
};

export default Footer;