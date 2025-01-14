import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
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
                  <button onClick={() => navigate("/design")}>Design</button>
                  <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button>
                  <button onClick={() => navigate("/our-work")}>Our Work</button>
                  <button onClick={()=>navigate("/Contact")}>Contact</button> {/* Scroll to contact form */}
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
}

export default Navbar