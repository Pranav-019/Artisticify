import { useNavigate } from "react-router-dom";
import "./design.css";

const tilesData = [
  { id: "logo1", title: "Logo Design", route: "/logo" },
  { id: "brochure", title: "Brochure Design", route: "/brochure" },
  { id: "packaging", title: "Packaging Design", route: "/packaging" },
  { id: "flyer", title: "Flyer Design", route: "/flyer" },
  { id: "poster", title: "Poster Design", route: "/poster" },
  { id: "exhibition", title: "Exhibition Design", route: "/exhibition" },
  { id: "uiux", title: "UI/UX Design", route: "/uiux" },
  { id: "icon", title: "Icon Design", route: "/icon" },
  { id: "stationary", title: "Stationary Design", route: "/stationary" },
];

const Design = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
=======
>>>>>>> bb1905db379d9c55743d28392c16e0f576acb4fd

  

  return (
    <div className="design">
      {/* Navbar */}
<<<<<<< HEAD
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>Artisticify</div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>

          {/* Dropdown for Design */}
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button>Design</button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {tilesData.map((tile) => (
                  <div
                    key={tile.id}
                    className="dropdown-item"
                    onClick={() => navigate(tile.route)}
                  >
                    {tile.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button>
          <button onClick={() => navigate("/our-work")}>Our Work</button>
          <button onClick={handleContactClick}>Contact</button>
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
=======
      

      {/* Tiles Section */}
      <div className="tiles-container">
        {tilesData.map((tile) => (
          <div
            key={tile.id}
            className={`tile ${tile.color}`}
            onClick={() => navigate(tile.route)}
          >
            <div className="title">{tile.title}</div>
            <div className="description">{tile.description}</div>
          </div>
        ))}
      </div>
>>>>>>> bb1905db379d9c55743d28392c16e0f576acb4fd
    </div>
  );
};

export default Design;
