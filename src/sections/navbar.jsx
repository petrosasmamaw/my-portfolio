import React from "react";
import "../css/navbar.css"

function Navbar() {
    return (
        <nav class="navbar">
    <a class="navbar-brand" href="#">PETER</a>
    <div class="navbar-nav">
      <a class="nav-link" href="#about">Home</a>
      <a class="nav-link" href="#features">Features</a>
      <a class="nav-link" href="#skills">Skills</a>
      <a class="nav-link" href="#project">projects</a>
    </div>
  </nav>
    )
}

export default Navbar