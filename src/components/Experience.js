import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'System Engineer',
      company: 'Contengris Technology Solutions',
      period: 'Sep 2024 - Jan 2025',
      responsibilities: [
        'Provided technical support and maintenance for servers, networks, and user systems',
        'Assisted in managing and monitoring IT infrastructure, including Linux and Windows servers',
        'Configured and troubleshooted network devices and implemented security measures',
        'Collaborated with development and operations teams to resolve system issues and improve performance'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

