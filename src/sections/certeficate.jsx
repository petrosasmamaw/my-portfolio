import React from 'react';
import { FaDownload } from 'react-icons/fa';
import certificateImage from '../images-all/Petros-Asmamaw-Udemy-Certificate.jpg';
import '../css/certeficate.css';

const Certificate = () => {
  return (
    <div id="certificate" className="udemy-container">
      <div className="left-section">
        <h1 className="udemy-title">My Full-stack web development <br/> Udemy Certification</h1>
        <div className="image-wrapper">
          <img
            src={certificateImage}
            alt="Udemy Certificate"
            className="udemy-image"
          />
        </div>
      </div>
      <div className="right-section">
        <div className="button-container">
          <a
            href="/Petros-Asmamaw-Udemy-Certificate.pdf"
            download="Petros-Asmamaw-Udemy-Certificate.pdf"
            className="resume-link"
          >
            <FaDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Download Certificate
          </a>
          <a
            href="/Petros-Asmamaw-Resume.pdf"
            download="Petros-Asmamaw-Resume.pdf"
            className="resume-link"
          >
            <FaDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
