import React from "react";
import "../css/skills.css";

function Skills() {
    return (
        <div id="skills">
            <div className="skills">

                {/* Front-End Skills */}
                <p className="core-skills-heading">Front-End Skills</p>
                <div className="skill-list">
                    <div className="skill-card">
                        <h3>HTML</h3>
                        <p>
                            HTML (HyperText Markup Language) is the foundation of every website. I write semantic, clean, and accessible markup optimized for SEO and maintainability.
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>CSS & Tailwind</h3>
                        <p>
                            I use modern CSS (Flexbox, Grid) and Tailwind for responsive and visually appealing layouts. I implement animations, transitions, and reusable utility classes for scalable designs.
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>JavaScript & React.js</h3>
                        <p>
                            I build dynamic front-ends with JavaScript and React.js, using hooks, functional components, state management, and React Router for SPA navigation.
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>Redux Toolkit</h3>
                        <p>
                            Redux Toolkit helps me manage global state efficiently with slices, async thunks, and selectors. I ensure predictable and scalable app behavior with DevTools.
                        </p>
                    </div>
                </div>

                {/* Back-End Skills */}
                <p className="core-skills-heading">Back-End Skills</p>
                <div className="skill-list">
                    <div className="skill-card">
                        <h3>Node.js & Express.js</h3>
                        <p>
                            I build RESTful APIs and server-side logic with Node.js and Express.js. I handle authentication, routing, middleware, and integration with databases.
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>Databases (MongoDB / SQL)</h3>
                        <p>
                            I design and manage databases with MongoDB (NoSQL) and SQL databases. I create efficient schemas, queries, and use ORMs/ODM for scalable applications.
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>API & JSON</h3>
                        <p>
                            I design and consume APIs using REST principles, handle JSON data, and integrate third-party services to enhance application functionality.
                        </p>
                    </div>
                </div>

                {/* DevOps & Tools */}
                <p className="core-skills-heading">DevOps & Tools</p>
                <div className="skill-list">
                    <div className="skill-card">
                        <h3>Git & GitHub</h3>
                        <p>
                            I manage version control using Git and GitHub, branching, pull requests, and collaboration workflows for team projects.
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>Deployment & Cloud</h3>
                        <p>
                            I deploy full-stack applications using platforms like Vercel, Netlify, Heroku, and configure cloud storage (Cloudinary, AWS S3) for assets.
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>Testing & Debugging</h3>
                        <p>
                            I write unit and integration tests for front-end and back-end code, and use debugging tools to ensure reliable and bug-free applications.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;
