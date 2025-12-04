import React from 'react';
import '../css/projects.css';
import movieSearching from '../images-all/movie.png';
import notesApp from '../images-all/notes.png';
import car from '../images-all/car.png';
import quiz from '../images-all/quiz.png';
import college from '../images-all/college.png';
import portfolio from '../images-all/portfolio.png';
import game from '../images-all/game.png';
import notertk from '../images-all/note-rtk.png';
import petershop from '../images-all/petershop.png';
import shopping from '../images-all/shopping.png';
import admin from '../images-all/admin.png';

const Projects = () => {
  const projects = [
    {   
    
      id: 1,
      type: 'Web',
      image: { src: shopping, alt: 'petershop' },
      title: 'Shopping -site',
      description: 'Peter-Shop is a modern React-based shopping app where users can browse products, add items to their cart, and leave comments. Built with sleek design and smooth UI, it delivers an interactive shopping experience. Guests can explore products freely, while registered users enjoy personalized carts and comment features, keeping their shopping organized and engaging.',
      tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit','supabase auth','airtable database','axios','react router'],
      viewDetailsLink: 'https://peteshopping-web-fully-structured-new.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/Shopping-Web-Fully-Structured-new.git',
    },
     {   
    
      id: 2,
      type: 'Web',
      image: { src: admin, alt: 'petershop' },
      title: 'Shopping-admin-dashboard',
      description: 'Peter-Shop Admin Dashboard is a powerful React-based management panel designed for smooth control over the shopping platform. Admins can easily add, edit, and delete products, manage user comments, and monitor cart activity in real time. With a clean interface and fast performance, it simplifies store operations while keeping data synchronized with Supabase and Airtable, ensuring full visibility and control over the shopping experience.',
      tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit','supabase auth','airtable database','axios','react router'],
      viewDetailsLink: 'https://peter-shopping-web-admin-dashboar.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/shopping-web-admin-dashboard-fully-structured.git',
    },
    {
      id: 3,
      type: 'Web',
      image: { src: game, alt: 'game discover' },
      title: 'Game-Discover',
      description: 'Game-Discover is a modern React-based gaming hub where users can browse, review, and favorite their top games. Built with clean design and smooth UI, it delivers a fun and interactive experience for every gamer. Whether you’re exploring new adventures or showing love to classics, this site keeps your gaming world organized and stylishly presented.',
      tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit', 'axios','react router'],
      viewDetailsLink: 'https://petros-game-discovery.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/Game-discovery-.git',
    },
     {
      id: 4,
      type: 'Web',
      image: { src: notertk, alt: 'note taking app' },
      title: 'Updated Create Note',
      description: 'I’ve upgraded my game website by integrating Supabase authentication and database support, alongside migrating from React Context API to Redux Toolkit (RTK) for state management. This update enhances performance, scalability, and maintainability, enabling efficient handling of global states like user favorites, game details, reviews, and secure user authentication. The result is a more dynamic, interactive, and personalized gaming experience.',
      tags: ['HTML5', 'CSS',  'React', 'Redux-toolkit','supabase auth','supabase db'],
      viewDetailsLink: 'https://create-note-authentication.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/Create-note-with-supbase-authentication.git',
    },
  {
      id: 5,
      type: 'Web',
      image: { src: movieSearching, alt: 'Movie Searching' },
      title: 'Movie-searching',
      description: 'A modern, responsive movie searching website that allows users to search, view. The design is sleek, user-friendly, and optimized for both desktop and mobile experiences.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React' ,'API' ,'context'],
      viewDetailsLink: 'https://petros-asmamaw-projects-1.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/petros-asmamaw-movie-searching.git',
    },
   
    {
      id: 6,
      type: 'Web',
      image: { src: car, alt: 'car slider app' },
      title: 'The-car-slider',
      description: 'Responsive web application built with React and Vite that allows users to view and navigate through a series of car images with smooth transitions. The app features a user-friendly interface with navigation buttons to switch between images.',
      tags: ['HTML5', 'CSS', 'JavaScript', 'React'],
      viewDetailsLink: 'https://petros-car-slider.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/The-Car-Slide.git',
    },
    
    {
      id: 7,
      type: 'Web',
      image: { src: notesApp, alt: 'Notes App' },
      title: 'Create-note',
      description: 'A visually stunning website for creating and managing notes with a responsive design and mockapi database.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      viewDetailsLink: 'https://petros-create-note.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/Petros-Create-Note.git',
    },
    {
       id: 8,
      type: 'Web',
      image: { src: college, alt: 'college app' },
      title: 'College-web',
      description: 'This is a fully responsive college website developed using React, designed to provide students, faculty, and visitors with a seamless online experience. The website features a modern UI, fast navigation, and optimized performance across all devices.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      viewDetailsLink: 'https://petros-college-web.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/petros-college.git'
    },
    {
       id: 9,
      type: 'Web',
      image: { src: quiz, alt: 'quiz app' },
      title: 'Create-quiz',
      description: 'A simple and fun quiz game built with React. Users can answer multiple-choice questions, get instant feedback, and track their score. The app is responsive, easy to use, and the questions can be customized to fit any topic.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      viewDetailsLink: 'https://petros-quiz-web.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/Petros-quiz.git'
    },
    {
       id: 10,
      type: 'Web',
      image: { src: portfolio, alt: 'portfolio app' },
      title: 'My-portfolio',
      description: 'A modern and fully responsive portfolio website crafted with React to present my journey, skills, and projects. It delivers a sleek design with fast performance, intuitive navigation, and seamless adaptability across all screen sizes. Built with reusable React components, the site offers a professional showcase of my work while maintaining a user-friendly and engaging experience.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      viewDetailsLink: 'https://petros-portfolio-web.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/my-portfolio.git'
    }
  ];

  return (
    <div className="app-container">
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ type, image, title, description, tags, viewDetailsLink, githubLink }) => {
  return (<div>
    <p className='deployed-websites'>Deployed Website</p>
    <div className="project-card">
      <div className="project-badge">{type}</div>
      <img src={image.src} alt={image.alt} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-buttons">
          <a href={viewDetailsLink} className="view-details-btn">
            View Details
          </a>
          <a href={githubLink} className="github-btn">
            GitHub
          </a>
        </div>
      </div>
    </div></div>
  );
};

export default Projects;
