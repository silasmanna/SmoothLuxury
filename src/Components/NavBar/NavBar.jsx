import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import logo from "./logo.png";
import nav_dropdown from "./ham-nbg.png";
import "./NavBar.css";

const NavBar = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const dropdown_toggle = (e) => {
    setIsMenuOpen((prev) => !prev);
    e.target.classList.toggle("open");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleApplyClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/visa-form");
    }
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("light-mode");
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Smooth Luxury Logistics" />
        </Link>
        
        <img
          className={`nav-dropdown ${isMenuOpen ? "open" : ""}`}
          onClick={dropdown_toggle}
          src={nav_dropdown}
          alt="Menu"
        />
        
        <ul ref={menuRef} className={`nav-links ${isMenuOpen ? "visible" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/fleet">Fleet</Link></li>
          <li><Link to="/security">Security</Link></li>
          <li><Link to="/tours">Tours</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          
          <div className="nav-auth">
            <button onClick={toggleTheme} className="theme-toggle nav-link-subtle" title="Toggle Theme">
              {isLightMode ? "🌙" : "☀️"}
            </button>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="nav-link-subtle">Login</Link>
                <button onClick={handleApplyClick} className="btn-primary">Apply</button>
              </>
            ) : (
              <>
                <Link to="/user" className="nav-link-subtle">My Profile</Link>
                <button onClick={handleLogout} className="nav-link-subtle">Logout</button>
                <button onClick={handleApplyClick} className="btn-primary">Apply</button>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
