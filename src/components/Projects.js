import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website with CI/CD',
      description: 'A modern, responsive portfolio website built with React and deployed on AWS S3. Features automated CI/CD pipeline using GitHub Actions for seamless deployments. The pipeline automatically builds and deploys the application to S3 whenever changes are pushed to the repository.',
      tech: ['React', 'AWS S3', 'GitHub Actions', 'CI/CD', 'JavaScript', 'CSS'],
      github: 'https://github.com/salmanyounas1000/Salman-Portfolio-CI-CD-S3',
      live: 'https://salman-devops-portfolio.s3.ap-northeast-1.amazonaws.com/index.html'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

