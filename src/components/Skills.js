import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Computing (AWS)',
      skills: ['EC2', 'S3', 'IAM', 'VPC', 'Elastic IP'],
      description: 'Hands-on experience with core services via personal labs'
    },
    {
      title: 'Containerization',
      skills: ['Docker'],
      description: 'Proficient in creating images and managing containers'
    },
    {
      title: 'Operating Systems',
      skills: ['Linux (Ubuntu)', 'Bash Scripting'],
      description: 'Proficient in Linux command-line administration and bash scripting'
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
      description: 'Experienced using Git and GitHub for version control and collaboration'
    },
    {
      title: 'Container Orchestration',
      skills: ['Kubernetes'],
      description: 'Building foundational knowledge through independent study and lab practice'
    },
    {
      title: 'Networking',
      skills: ['TCP/IP', 'DNS', 'VLANs', 'Cisco'],
      description: 'Solid grasp of core networking concepts from CCNA studies'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category-title">{category.title}</h3>
              {category.description && (
                <p className="skill-category-description">{category.description}</p>
              )}
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

