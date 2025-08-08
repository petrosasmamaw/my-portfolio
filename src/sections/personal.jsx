import React from "react";
import "../css/personal.css"
import petrosImg from "../images-all/photo_2025-02-09_18-44-46.jpg";


function Personal() {
    return (
        <div id="about">
            <div className="text-center">
                <div className="text-content">
                    <h1 className="name-heading">PETROS ASMAMAW</h1>
                    <p className="intro-text">
                        I am Petros Asmamaw, a passionate software engineering enthusiast I recently started web development and have already created my own portfolio website. I am dedicated to growing as a developer and building innovative digital solutions.
                        My website reflects my progress, ambitions, and passion for the field.
                    </p>
                </div>
                
                <div className="right-content">
                <img className="intro-img" src={petrosImg} alt="Petros" />
                    <div className="button-group">
                        <a href="https://www.instagram.com/piter._rock?igsh=MXJhbjJ5bnZwMWhoYg=="><button className="btn btn-primary">Instagram</button></a>
                        <a href="https://t.me/Nehemiah00"><button className="btn btn-outline-secondary">Telegram</button></a>
                        <a href="https://www.linkedin.com/in/petros-asmamaw-172ab4375?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx7FClNBmQDm0fhSaWV5Zzg%3D%3D"><button className="btn btn-outline-secondary">Linkedin</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;