import { useState } from 'react';
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
}

export default Navbar;
