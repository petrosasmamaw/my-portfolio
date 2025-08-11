import React from "react";
import "../css/navbar.css";
import { FaHome, FaStar, FaTools, FaProjectDiagram, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
            <a className="navbar-brand" href="#"><FaUser style={{marginRight: '6px'}} />PETER</a>
      <div className="navbar-nav">
        <a className="nav-link" href="#about"><FaHome style={{marginRight: '6px'}} />Home</a>
        <a className="nav-link" href="#features"><FaStar style={{marginRight: '6px'}} />Features</a>
        <a className="nav-link" href="#skills"><FaTools style={{marginRight: '6px'}} />Skills</a>
        <a className="nav-link" href="#project"><FaProjectDiagram style={{marginRight: '6px'}} />Projects</a>
      </div>
    </nav>
  )
}

export default Navbar