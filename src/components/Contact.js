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
                <p>salman.younas@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/salman-younas</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div>
                <h3>GitHub</h3>
                <p>github.com/salman-younas</p>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
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

