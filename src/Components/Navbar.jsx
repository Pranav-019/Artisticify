<<<<<<< HEAD
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
=======
import { useState } from 'react';
>>>>>>> 1379a185c2c9739f93b676736c81d0c2da01a946
import { useNavigate } from 'react-router-dom';

import Logo from './Logo/logo';
import Flyer from './Flyer/flyer';
import Icon from './Icon/icon';
import Packaging from './Packaging/packaging';
import Poster from './Poster/poster';
import uiux from './UIUX/uiux';
import Brochure from './Brochure/brochure';
import Stationary from './Stationary/stationary';
import Exhibition from './Exibition/exibition';

function Navbar() {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div>
      <nav className="navbar">
        <div className="logo">Artisticify</div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <div className="">
            <button onClick={() => navigate("/home")}>Home</button>
          </div>
          <button onClick={() => navigate("/about")}>About</button>
          {/* <button onClick={() => navigate("/design")}>Design</button> */}
          <Dropdown className='drop'>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Design
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/logo" className='drop-item'>Logo Design</Dropdown.Item>
              <Dropdown.Item href="/Brochure">Brochure Design</Dropdown.Item>
              <Dropdown.Item href="/Packaging">Packaging Designe</Dropdown.Item>
              <Dropdown.Item href="/Flyer">Flyer Design</Dropdown.Item>
              <Dropdown.Item href="/Poster">Poster Design</Dropdown.Item>
              <Dropdown.Item href="/UIUX">UI/UX Design</Dropdown.Item>
              <Dropdown.Item href="/Magazine">Magazine Design</Dropdown.Item>
              <Dropdown.Item href="/VisualAid">Visual Aid Design</Dropdown.Item>
              <Dropdown.Item href="/Calender">Calender Design</Dropdown.Item>
              <Dropdown.Item href="/Icon">Icon Design</Dropdown.Item>
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
          {/* <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button> */}
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Digital Maketing
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/SearchEngine">Search Engine Optimization</Dropdown.Item>
              <Dropdown.Item href="/SoacialMedia">Social Media Marketing</Dropdown.Item>
              <Dropdown.Item href="/ContentMarketing">Content Marketing</Dropdown.Item>
              <Dropdown.Item href="/PayPer">Pay Per Click</Dropdown.Item>
              <Dropdown.Item href="/SpecialPAckages">Special Packages</Dropdown.Item>
              <Dropdown.Item href="/GrowBusiness">
                Grow your business with</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          <button onClick={() => navigate("/our-work")}>Our Work</button>
          <button onClick={() => navigate("/Contact")}>Contact</button> {/* Scroll to contact form */}
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
  )
=======
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility

    return (
        <div>
            <nav className="navbar">
                <div className="logo">Artisticify</div>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <div className="">
                        <button onClick={() => navigate("/home")}>Home</button>
                    </div>
                    <button onClick={() => navigate("/about")}>About</button>
                    
                    {/* Design Button with Dropdown */}
                    <div className="dropdown">
                        <button className="design-btn" onClick={toggleDropdown}>
                            Design
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <button onClick={() => navigate("/flyer")}>Flyer</button>
                                <button onClick={() => navigate("/icon")}>Icon</button>
                                <button onClick={() => navigate("/packaging")}>Packaging</button>
                                <button onClick={() => navigate("/poster")}>Poster</button>
                                <button onClick={() => navigate("/uiux")}>UI/UX</button>
                                <button onClick={() => navigate("/exhibition")}>Exhibition</button>
                                <button onClick={() => navigate("/brochure")}>Brochure</button>
                                <button onClick={() => navigate("/stationary")}>Stationary</button>
                            </div>
                        )}
                    </div>

                    <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button>
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
>>>>>>> 1379a185c2c9739f93b676736c81d0c2da01a946
}

export default Navbar;
