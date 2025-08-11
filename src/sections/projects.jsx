import React from 'react';
import '../css/projects.css';
import movieSearching from '../images-all/movie.png';
import notesApp from '../images-all/notes.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      type: 'Web',
      image: { src: movieSearching, alt: 'Movie Searching' },
      title: 'Movie-searching',
      description: 'A modern, responsive movie searching website that allows users to search, view. The design is sleek, user-friendly, and optimized for both desktop and mobile experiences.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      viewDetailsLink: 'https://petros-asmamaw-projects-1.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/petros-asmamaw-movie-searching.git',
    },
    {
      id: 2,
      type: 'Web',
      image: { src: notesApp, alt: 'Notes App' },
      title: 'Create-note',
      description: 'A visually stunning website for creating and managing notes with a responsive design and mockapi database.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      viewDetailsLink: 'https://petros-create-note.netlify.app/',
      githubLink: 'https://github.com/petrosasmamaw/Petros-Create-Note.git',
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
