import React from 'react';
import { FaDownload } from 'react-icons/fa';
import certificateImage from '../images-all/Petros-Asmamaw-Udemy-Certificate.jpg';
import resume from '../images-all/resume.png';
import '../css/certeficate.css';
import reactCertificate from '../images-all/PetrosAsmamawReact.jpg';

const Certificate = () => {
  return (
    <>
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
            href={certificateImage}
            download="Petros-Asmamaw-Udemy-Certificate.jpg"
            className="resume-link"
          >
            <FaDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Download Certificate
          </a>
          <a
            href={resume}
            download="resume.png"
            className="resume-link"
          >
            <FaDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
        <div id="certificate" className="udemy-container">
      <div className="left-section">
        <h1 className="udemy-title">My React | Redux Toolkit <br/> Udemy Certification</h1>
        <div className="image-wrapper">
          <img
            src={reactCertificate}
            alt="Udemy Certificate"
            className="udemy-image"
          />
        </div>
      </div>
      <div className="right-section">
        <div className="button-container">
          <a
            href={reactCertificate}
            download="PetrosAsmamawReact.jpg"
            className="resume-link"
          >
            <FaDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Download Certificate
          </a>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Certificate;
