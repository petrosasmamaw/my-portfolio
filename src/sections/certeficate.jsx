import React from 'react';
import { FaDownload } from 'react-icons/fa';
import certificateImage from '../images-all/Petros-Asmamaw-Udemy-Certificate.jpg';
import resume from '../images-all/resume2.png';
import '../css/certeficate.css';
import reactCertificate from '../images-all/PetrosAsmamawReact.jpg';

const ResumeCard = ({ img, file }) => (
  <div id='certificate' className="resume-card">
    <div className="resume-thumb">
      <img src={img} alt="Resume thumbnail" />
    </div>
    <div className="resume-info">
      <h3 className="resume-title">My Resume</h3>
      <p className="resume-note">Download a clean PDF version of my resume for details on experience and projects.</p>
      <div className="resume-actions">
        <a href={file} download="Petros-Resume.png" className="resume-download">
          <FaDownload style={{ marginRight: 8 }} />
          Download Resume
        </a>
      </div>
    </div>
  </div>
);

const CertificateCard = ({ title, img, downloadName }) => (
  <div className="udemy-container">
    <div className="left-section">
      <div className="image-wrapper">
        <img src={img} alt={title} className="udemy-image" />
      </div>
    </div>
    <div className="right-section">
      <h2 className="udemy-title">{title}</h2>
      <p className="udemy-subtitle">Verified Udemy certificate demonstrating course completion , applied skills and projects.</p>
      <div className="button-container">
        <a href={img} download={downloadName} className="resume-link">
          <FaDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Download Certificate
        </a>
      </div>
    </div>
  </div>
);

const Certificate = () => {
  return (
    <>
      <div className="cert-section container">
        <ResumeCard img={resume} file={resume} />

        <CertificateCard
          title={<><span>Full‑stack Web Development</span><br />Udemy Certification</>}
          img={certificateImage}
          downloadName="Petros-Asmamaw-Udemy-Certificate.jpg"
        />

        <CertificateCard
          title={<><span>React | Redux Toolkit</span><br />Udemy Certification</>}
          img={reactCertificate}
          downloadName="PetrosAsmamawReact.jpg"
        />
      </div>
    </>
  );
};

export default Certificate;
