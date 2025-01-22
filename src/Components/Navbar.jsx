import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'; // Importing react-bootstrap dropdown

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          {/* Logo with Bootstrap classes for alignment */}
          <div className="logo d-flex align-items-center">
            <img
              src="src/assets/artisticify-logo.png"
              alt="Artisticify Logo"
              className="img-fluid" // Ensures the image scales responsively
              style={{ height: '45px' }} // Adjust logo size to match previous text height
            />
          </div>

          <div className={`nav-links ${menuOpen ? "active" : ""} d-flex align-items-center`}>
            <button className="btn btn-link text-decoration-none" onClick={() => navigate("/home")}>Home</button>
            <button className="btn btn-link text-decoration-none" onClick={() => navigate("/about")}>About</button>

            {/* Design Dropdown using react-bootstrap */}
            <Dropdown className="drop">
              <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-decoration-none">
                Design
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="/logo" className="text-decoration-none">Logo Design</Dropdown.Item>
                <Dropdown.Item href="/Brochure" className="text-decoration-none">Brochure Design</Dropdown.Item>
                <Dropdown.Item href="/Packaging" className="text-decoration-none">Packaging Design</Dropdown.Item>
                <Dropdown.Item href="/Flyer" className="text-decoration-none">Flyer Design</Dropdown.Item>
                <Dropdown.Item href="/Poster" className="text-decoration-none">Poster Design</Dropdown.Item>
                <Dropdown.Item href="/UIUX" className="text-decoration-none">UI/UX Design</Dropdown.Item>
                <Dropdown.Item href="/Magazine" className="text-decoration-none">Magazine Design</Dropdown.Item>
                <Dropdown.Item href="/VisualAid" className="text-decoration-none">Visual Aid Design</Dropdown.Item>
                <Dropdown.Item href="/Calender" className="text-decoration-none">Calendar Design</Dropdown.Item>
                <Dropdown.Item href="/Icon" className="text-decoration-none">Icon Design</Dropdown.Item>

                {/* Stationary Design Dropdown */}
                <Dropdown drop="end">
                  <Dropdown.Toggle as="a" className="dropdown-item text-decoration-none">
                    Stationary Design
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/Stationary/LetterHead" className="text-decoration-none">Letter Head Design</Dropdown.Item>
                    <Dropdown.Item href="/Stationary/Envelope" className="text-decoration-none">Envelope Design</Dropdown.Item>
                    <Dropdown.Item href="/Stationary/VisitingCard" className="text-decoration-none">Visiting Card Design</Dropdown.Item>
                    <Dropdown.Item href="/Stationary/Certificate" className="text-decoration-none">Certificate Design</Dropdown.Item>
                    <Dropdown.Item href="/Stationary/MenuCard" className="text-decoration-none">Menu Card Design</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-decoration-none">
                Digital Marketing
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/SearchEngine" className="text-decoration-none">Search Engine Optimization</Dropdown.Item>
                <Dropdown.Item href="/SocialMedia" className="text-decoration-none">Social Media Marketing</Dropdown.Item>
                <Dropdown.Item href="/ContentMarketing" className="text-decoration-none">Content Marketing</Dropdown.Item>
                <Dropdown.Item href="/PayPer" className="text-decoration-none">Pay Per Click</Dropdown.Item>
                <Dropdown.Item href="/SpecialPackages" className="text-decoration-none">Special Packages</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button className="btn btn-link text-decoration-none" onClick={() => navigate("/our-work")}>Our Work</button>
            <button className="btn btn-link text-decoration-none" onClick={() => navigate("/Contact")}>Contact</button>
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
