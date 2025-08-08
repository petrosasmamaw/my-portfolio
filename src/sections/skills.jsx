import React from "react";
import "../css/skills.css"

function Skills() {
    return (
        <div id="skills">
  <header class="header">
    <h1 class="title">Web Development Skills</h1>
    <p class="subtitle">A showcase of the technologies I use to build modern, responsive, and dynamic websites.</p>
  </header>

  <div class="skills">
    <p class="core-skills-heading">Core Front-End Skills</p>
    <div class="skill-list">
      <div class="skill-card">
        <h3>HTML</h3>
        <p>
          HTML (HyperText Markup Language) is the foundation of every website. I use semantic tags to create clean, structured, and accessible markup that ensures websites are SEO-friendly and screen-reader compatible. My HTML code is always optimized for maintainability and scalability.
        </p>
      </div>

      <div class="skill-card">
        <h3>CSS</h3>
        <p>
          I use modern CSS techniques such as Flexbox and CSS Grid to design fully responsive layouts. My styling is clean, consistent, and based on reusable classes. I also implement animations, transitions, and hover effects to create interactive and visually appealing interfaces.
        </p>
      </div>

      <div class="skill-card">
        <h3>Bootstrap</h3>
        <p>
          I use Bootstrap to speed up the development process with its pre-built components and responsive grid system. I customize Bootstrap using SASS variables or utility classes to maintain brand consistency and achieve a professional look while saving development time.
        </p>
      </div>

      <div class="skill-card">
        <h3>Tailwind CSS</h3>
        <p>
          With Tailwind, I build highly responsive and modern UIs using utility-first classes. I prefer Tailwind for projects where I want full control over design while maintaining rapid development. I also use responsive variants and dark mode features for accessibility and theme control.
        </p>
      </div>
    </div>

    <p class="core-skills-heading" >Programming & Logic</p>
    <div class="skill-list">
      <div class="skill-card">
        <h3>JavaScript</h3>
        <p>
          JavaScript adds interactivity and logic to my web projects. I use it for dynamic DOM manipulation, event handling, form validation, animations, and integrating third-party APIs. I write clean and modular JavaScript code that follows modern ES6+ standards.
        </p>
      </div>

      <div class="skill-card">
        <h3>React.js</h3>
        <p>
          React is my go-to JavaScript framework for building interactive, scalable single-page applications (SPAs). I use hooks for state and lifecycle management, reusable functional components for UI design, and React Router for navigation. I also manage side effects with useEffect and integrate APIs with Axios or fetch.
        </p>
      </div>
    </div>
    </div>
        </div>
    )
}

export default Skills;