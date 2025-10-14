import React, { useState } from "react";
import "../css/navbar.css";
import { FaHome, FaStar, FaTools, FaProjectDiagram, FaUser, FaCertificate, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#"><FaUser style={{ marginRight: '6px' }} />PETER</a>
      <ul className={`navbar-nav ${mobileMenu ? "active" : ""}`}>
        <li><Link to='about' smooth={true} offset={0} duration={500} onClick={toggleMenu}><FaHome style={{ marginRight: '6px' }} />Home</Link></li>
        <li><Link to='features' smooth={true} offset={0} duration={500} onClick={toggleMenu}><FaTools style={{ marginRight: '6px' }} />Skills</Link></li>
        <li><Link to='certificate' smooth={true} offset={0} duration={500} onClick={toggleMenu}><FaCertificate style={{ marginRight: '6px' }} />Certificate</Link></li>
        <li><Link to='project' smooth={true} offset={0} duration={500} onClick={toggleMenu}><FaProjectDiagram style={{ marginRight: '6px' }} />Projects</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} onClick={toggleMenu}><FaUser style={{ marginRight: '6px' }} />Contact Us</Link></li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {mobileMenu ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
    </nav>
  );
}

export default Navbar;