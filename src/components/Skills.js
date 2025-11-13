import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes']
    },
    {
      title: 'CI/CD & Automation',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible']
    },
    {
      title: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'Datadog']
    },
    {
      title: 'Scripting & Languages',
      skills: ['Python', 'Bash', 'YAML', 'JSON', 'PowerShell']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category-title">{category.title}</h3>
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

