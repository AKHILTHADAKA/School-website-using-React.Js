import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/spslogo.png`}
            className="logo-image"
            alt="School Logo"
          />
        </a>
        <button
          className={`menu-toggle ${isMenuOpen ? "close-icon" : ""}`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">menu</span>
          <svg
            className="menu-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M1 1l15 12M1 13L16 1" : "M1 1h15M1 7h15M1 13h15"}
            />
          </svg>
        </button>
        <div
          className={`menu ${isMenuOpen ? "active" : ""}`}
          id="navbar-default"
        >
          <ul className="menu-list">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" onClick={closeMenu}>
                Academics
              </Link>
            </li>
            <li>
              <Link to="/admissions" onClick={closeMenu}>
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/faculty" onClick={closeMenu}>
                Faculty
              </Link>
            </li>
            <li>
              <Link to="/students" onClick={closeMenu}>
                Students
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
