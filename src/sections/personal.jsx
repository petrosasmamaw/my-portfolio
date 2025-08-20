import React from "react";
import "../css/personal.css";
import petrosImg from "../images-all/my-photo1.png";
import { FaInstagram, FaTelegramPlane, FaLinkedin, FaDesktop } from "react-icons/fa";


function Personal() {
    return (
        <div id="about">
            <div className="text-center">
                <div className="text-content">
                    <p className="role"><FaDesktop style={{marginRight: '5px', verticalAlign: 'middle'}} />Frontend-developer</p>
                    <h1 className="name-heading">PETROS ASMAMAW</h1>
                    <p className="intro-text">
                        I’m Petros Asmamaw, a front-end web developer.
                        I specialize in creating responsive and dynamic websites.
                        My main focus is building modern applications with React.
                        I’m passionate about delivering clean, user-friendly designs.
                    </p>
                </div>
                
                <div className="right-content">
                <img className="intro-img" src={petrosImg} alt="Petros" />
                    <div className="button-group">
                                                <a href="https://www.instagram.com/piter._rock?igsh=MXJhbjJ5bnZwMWhoYg==">
                                                    <button className="btn btn-primary">
                                                        <FaInstagram style={{marginRight: '8px', verticalAlign: 'middle'}} />Instagram
                                                    </button>
                                                </a>
                                                <a href="https://t.me/Nehemiah00">
                                                    <button className="btn btn-outline-secondary">
                                                        <FaTelegramPlane style={{marginRight: '8px', verticalAlign: 'middle'}} />Telegram
                                                    </button>
                                                </a>
                                                <a href="https://www.linkedin.com/in/petros-asmamaw-172ab4375?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx7FClNBmQDm0fhSaWV5Zzg%3D%3D">
                                                    <button className="btn btn-outline-secondary">
                                                        <FaLinkedin style={{marginRight: '8px', verticalAlign: 'middle'}} />Linkedin
                                                    </button>
                                                </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;