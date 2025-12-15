import React from "react";
import "../css/features.css";
import { FaDownload } from "react-icons/fa";
// Replace URL(...) with static imports and add onError fallback
import laptop from "../images-all/laptop.svg";
import server from "../images-all/server.jpg";
import database from "../images-all/database.png";
import cloud from "../images-all/cloud.png";
import frontend from "../images-all/frontend.png";

function safeOnError(e, name) {
  console.warn(`Image failed to load: ${name}`, e);
  e.currentTarget.onerror = null;
  e.currentTarget.src = laptop;
}

function Features() {
    return (
        <div>
            <header className="header">
                <h1 className="title">Full-Stack Development Features</h1>
            </header>

            <div id="features">
                <div className="features">

                    {/* Front-End Feature */}
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={frontend} alt="Responsive Design" onError={(e)=>safeOnError(e,'laptop')} />
                        </div>
                        <h3>Responsive & Interactive Front-End</h3>
                        <p>
                            I build dynamic, responsive, and accessible web interfaces using HTML, CSS, JavaScript, React.js, and Tailwind. Focus on smooth UI/UX, reusable components, and interactivity.
                        </p>
                        <a href="https://t.me/Nehemiah00" className="icon-link">Contact to action</a>
                    </div>

                    {/* Back-End Feature */}
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={server} alt="Back-End Development" onError={(e)=>safeOnError(e,'server')} />
                        </div>
                        <h3>Robust Back-End Development</h3>
                        <p>
                            I develop RESTful APIs, authentication systems, and server-side logic using Node.js and Express.js. I ensure efficient request handling, secure routes, and scalable architecture.
                        </p>
                        <a href="https://t.me/Nehemiah00" className="icon-link">Contact to action</a>
                    </div>

                    {/* Database Feature */}
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={database} alt="Database Management" onError={(e)=>safeOnError(e,'database')} />
                        </div>
                        <h3>Database Design & Management</h3>
                        <p>
                            I work with MongoDB and SQL databases to store, query, and  manage data efficiently. I design schemas, indexes, and relationships for scalable full-stack applications.
                        </p>
                        <a href="https://t.me/Nehemiah00" className="icon-link">Contact to action</a>
                    </div>

                    {/* Deployment & Cloud Feature */}
                    <div className="feature">
                        <div className="feature-icon">
                            <img src={cloud} alt="Deployment & Cloud" onError={(e)=>safeOnError(e,'cloud')} />
                        </div>
                        <h3>Deployment & Cloud Integration </h3>
                        <p>
                            I deploy full-stack apps on platforms like Vercel, Netlify, or Heroku, Render, and integrate cloud services like Cloudinary or AWS S3. Ensures live apps, storage management, and continuous delivery.
                        </p>
                        <a href="https://t.me/Nehemiah00" className="icon-link">Contact to action</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Features;
