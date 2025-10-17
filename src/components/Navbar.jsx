import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "/assets/navbar/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="AccuPro Solutions Logo" />
          </a>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-tech-jobs"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Find Tech Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/talent-solutions"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Talent Solutions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news-and-insights"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              News & Insights
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </NavLink>
          </li>

          {/* Mobile Actions */}
          <div className="nav-actions-mobile">
            <button className="btn-outline">Join Now</button>
            <button className="btn-primary">Hire Now</button>
          </div>
        </ul>

        {/* Desktop Buttons */}
        <div className="nav-actions">
          <button className="btn-outline">Join Now</button>
          <button className="btn-primary">Hire Now</button>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
