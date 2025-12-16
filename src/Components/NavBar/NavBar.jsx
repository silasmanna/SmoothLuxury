import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import logo from "./logo.png";
import nav_dropdown from "./ham-nbg.png";
import "./NavBar.css";

const NavBar = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const dropdown_toggle = (e) => {
    setIsMenuOpen((prev) => !prev);
    e.target.classList.toggle("open");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token"); // Assuming token is stored in localStorage
    navigate("/login");
  };

  const handleApplyClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/visa-form");
    }
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="navMain">
        <div className="logoMain">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <img
          className="nav-dropdown"
          onClick={dropdown_toggle}
          src={nav_dropdown}
          alt="Menu"
        />
        <div
          ref={menuRef}
          className={`linksMain ${isMenuOpen ? "linksMain-visible" : ""}`}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/faq">
            <li>FAQ</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <li onClick={handleApplyClick} style={{ cursor: "pointer" }}>
            Apply
          </li>
          {!isAuthenticated && (
            <>
              <Link to="/register">
                <li>Register</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <Link to="/user">
                <li>My Profile</li>
              </Link>
              <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;

// // NavBar.js
// import React, { useRef, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../AuthProvider";
// import logo from "./logo.png";
// import nav_dropdown from "./ham-nbg.png";
// import "./NavBar.css";

// const NavBar = () => {
//   const menuRef = useRef();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const { isAuthenticated, setIsAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const dropdown_toggle = (e) => {
//     setIsMenuOpen((prev) => !prev);
//     e.target.classList.toggle("open");
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("token"); // Assuming token is stored in localStorage
//     navigate("/login");
//   };

//   // Close the menu when the route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   return (
//     <>
//       <div className="navMain">
//         <div className="logoMain">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>
//         <img
//           className="nav-dropdown"
//           onClick={dropdown_toggle}
//           src={nav_dropdown}
//           alt="Menu"
//         />
//         <div
//           ref={menuRef}
//           className={`linksMain ${isMenuOpen ? "linksMain-visible" : ""}`}
//         >
//           <Link to="/">
//             <li>Home</li>
//           </Link>
//           <Link to="/about">
//             <li>About</li>
//           </Link>
//           <Link to="/faq">
//             <li>FAQ</li>
//           </Link>
//           <Link to="/services">
//             <li>Services</li>
//           </Link>
//           <Link to="/visa-form">
//             <li>Apply</li>
//           </Link>
//           {!isAuthenticated && (
//             <>
//               <Link to="/register">
//                 <li>Register</li>
//               </Link>
//               <Link to="/login">
//                 <li>Login</li>
//               </Link>
//             </>
//           )}
//           {isAuthenticated && (
//             <>
//               <Link to="/user">
//                 <li>My Profile</li>
//               </Link>
//               <li onClick={handleLogout} style={{ cursor: "pointer" }}>
//                 Logout
//               </li>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;
