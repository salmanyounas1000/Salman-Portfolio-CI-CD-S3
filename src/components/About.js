import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hello, I'm</h1>
            <h2 className="hero-name">Salman Younas</h2>
            <h3 className="hero-title">DevOps Engineer</h3>
            <p className="hero-description">
              Passionate about automating infrastructure, optimizing cloud deployments, 
              and building scalable systems. I specialize in CI/CD pipelines, containerization, 
              and cloud infrastructure management.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>SY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

