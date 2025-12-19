import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Petros Asmamaw. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/petrosasmamaw" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/petros-asmamaw-172ab4375/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="petrosasmamaw2@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
