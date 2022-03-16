import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>

      <div className="nav-container">
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li className="nav-item">
            <Link
              to="/main"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/aboutme"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/skills"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Skills
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/archiving"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Archiving
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/project"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Project
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/career"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
