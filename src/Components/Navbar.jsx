import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'; // Importing react-bootstrap dropdown

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          {/* Replacing text with logo image */}
          <img src="src/assets/artisticify-logo.png" alt="Artisticify Logo" style={{ height: '42.5px' }} />
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>

          {/* Design Dropdown using react-bootstrap */}
          <Dropdown className="drop">
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Design
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item href="/logo">Logo Design</Dropdown.Item>
              <Dropdown.Item href="/Brochure">Brochure Design</Dropdown.Item>
              <Dropdown.Item href="/Packaging">Packaging Design</Dropdown.Item>
              <Dropdown.Item href="/Flyer">Flyer Design</Dropdown.Item>
              <Dropdown.Item href="/Poster">Poster Design</Dropdown.Item>
              <Dropdown.Item href="/UIUX">UI/UX Design</Dropdown.Item>
              <Dropdown.Item href="/Magazine">Magazine Design</Dropdown.Item>
              <Dropdown.Item href="/VisualAid">Visual Aid Design</Dropdown.Item>
              <Dropdown.Item href="/Calender">Calendar Design</Dropdown.Item>
              <Dropdown.Item href="/Icon">Icon Design</Dropdown.Item>

              {/* Stationary Design Dropdown */}
              <Dropdown drop="end">
                <Dropdown.Toggle as="a" className="dropdown-item">
                  Stationary Design
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/Stationary/LetterHead">Letter Head Design</Dropdown.Item>
                  <Dropdown.Item href="/Stationary/Envelope">Envelope Design</Dropdown.Item>
                  <Dropdown.Item href="/Stationary/VisitingCard">Visiting Card Design</Dropdown.Item>
                  <Dropdown.Item href="/Stationary/Certificate">Certificate Design</Dropdown.Item>
                  <Dropdown.Item href="/Stationary/MenuCard">Menu Card Design</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>


          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Digital Marketing
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/SearchEngine">Search Engine Optimization</Dropdown.Item>
              <Dropdown.Item href="/SoacialMedia">Social Media Marketing</Dropdown.Item>
              <Dropdown.Item href="/ContentMarketing">Content Marketing</Dropdown.Item>
              <Dropdown.Item href="/PayPer">Pay Per Click</Dropdown.Item>
              <Dropdown.Item href="/SpecialPAckages">Special Packages</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button onClick={() => navigate("/our-work")}>Our Work</button>
          <button onClick={() => navigate("/Contact")}>Contact</button>
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
    </div>
  );
}

export default Navbar;
