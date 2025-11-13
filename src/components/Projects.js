import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Implemented automated CI/CD pipelines using Jenkins and GitLab CI for multiple microservices, reducing deployment time by 60%.',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'GitLab CI'],
      link: '#'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Designed and deployed scalable cloud infrastructure on AWS using Terraform, implementing auto-scaling and load balancing.',
      tech: ['AWS', 'Terraform', 'Ansible', 'CloudFormation'],
      link: '#'
    },
    {
      title: 'Monitoring & Alerting System',
      description: 'Set up comprehensive monitoring solution using Prometheus and Grafana with custom dashboards and alerting rules.',
      tech: ['Prometheus', 'Grafana', 'AlertManager', 'Python'],
      link: '#'
    },
    {
      title: 'Container Orchestration',
      description: 'Migrated legacy applications to Kubernetes, improving resource utilization and enabling zero-downtime deployments.',
      tech: ['Kubernetes', 'Docker', 'Helm', 'CI/CD'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work and projects</p>
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
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

