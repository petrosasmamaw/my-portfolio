import React from 'react';
import '../css/projects.css';
import HAdmin from '../images-all/HAdmin.png';
import hotel from '../images-all/hotel.png';
import client from '../images-all/client.png';
import foodweb from '../images-all/foodweb.png';
import foodadmin from '../images-all/foodadmin.png';

const FullStackProjects = () => {
  const projects = [
    {
      id: 1,
      type: 'Web',
      image: { src: HAdmin, alt: 'hotel' },
      title: 'BahiRoom Admin Dashboard',
      description:
        'MERN admin console with Supabase Auth, Redux Toolkit state, and MERN product/content management. Secure routes with React Router, real-time updates, and ops tools for inventory, users, and reviews.',
      tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS',],
      viewDetailsLink: 'https://bahi-room-admin-frontend.vercel.app/',
      githubLink: 'https://github.com/petrosasmamaw/BahiRoom-Admin-Frontend.git',
    },
    {
      id: 2,
      type: 'Web',
      image: { src: hotel, alt: 'hotel' },
      title: 'BahiRoom Hotel Dashboard',
      description:
        'Hotel ops dashboard on MERN with Supabase Auth, protected routes via React Router, and Redux Toolkit for bookings, guests, and analytics. Integrates mern + REST APIs for live property insights.',
      tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS',],
      viewDetailsLink: 'https://bahi-room-hotel-frontend.vercel.app/',
      githubLink: 'https://github.com/petrosasmamaw/BahiRoom-Hotel-Frontend.git',
    },
    {
      id: 3,
      type: 'Web',
      image: { src: client, alt: 'client' },
      title: 'BahiRoom Client Dashboard',
      description:
        'Client-facing MERN app with Supabase Auth, React Router navigation, and Redux Toolkit for bookings, favorites, and reviews. Fast, responsive UI with Axios-powered API calls and shared state.',
      tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS',],
      viewDetailsLink: 'https://bahi-room-client-frontend.vercel.app/',
      githubLink: 'https://github.com/petrosasmamaw/BahiRoom-Client-Frontend.git',
    },
    {
      id: 4,
      type: 'Web',
      image: { src: foodweb, alt: 'food delivery' },
      title: 'Food Delivery Website',
      description:
        'Full-stack MERN food delivery app with Supabase Auth for user accounts, React Router for smooth navigation and Redux Toolkit for cart & order state, REST APIs for restaurants/menus, and responsive UI for mobile-first ordering.',
      tags: ['MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Stripe', 'Axios', 'Responsive', 'Tailwind/CSS'],
      viewDetailsLink: 'https://food-delivering-client-frontend-9jd.vercel.app/',
      githubLink: 'https://github.com/petrosasmamaw/Food-Delivering-Client-Frontend.git',
    },
    {
      id: 5,
      type: 'Web',
      image: { src: foodadmin, alt: 'food admin' },
      title: 'Food Admin Dashboard',
      description:
        'Admin portal for the food delivery system built on MERN. Uses Supabase Auth + role-based access, Redux Toolkit for centralized state, real-time order management, menu CRUD, analytics charts, and Cloudinary for media uploads.',
      tags: ['MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Real-time', 'Cloudinary', 'Charts', 'Admin UI'],
      viewDetailsLink: 'https://food-delivery-admin-frontend-beta.vercel.app/',
      githubLink: 'https://github.com/petrosasmamaw/Food-Delivery-Admin-Frontend.git',
    }
  ];

  return (<div>
    <h2 className="projects-heading">My Advanced FullStack Projects (MERN Stack)</h2>
    <div className="app-container">
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </div>
  );
};

const ProjectCard = ({ type, image, title, description, tags, viewDetailsLink, githubLink }) => {
  return (
  <div id='project'>
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
    </div>
    </div>
  );
};

export default FullStackProjects;
