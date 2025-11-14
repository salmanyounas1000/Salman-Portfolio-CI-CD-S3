import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <a href="mailto:hafizsalman1000@gmail.com" className="contact-link">
                  hafizsalman1000@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <a href="tel:+923006402732" className="contact-link">
                  +92300-6402732
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p className="contact-text">Gujranwala, Pakistan</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/salmanyounas1000" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/salmanyounas1000
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/salmanyounas1000" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/salmanyounas1000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Salman Younas. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;


