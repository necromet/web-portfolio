import { useState } from 'react';
import './Contact.css';

/**
 * Contact Page Component
 * Contact form and social media links
 */

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a frontend-only form - in production, you'd send this to a backend
    console.log('Form submitted:', formData);
    setFormStatus('success');
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus(null);
    }, 3000);
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '📁' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: '✉️' },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Have a project in mind? Let's work together to bring your ideas to life
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="section-heading">Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What is this about?"
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="6"
                  placeholder="Tell me about your project..."
                  aria-required="true"
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>

              {formStatus === 'success' && (
                <div className="form-message success" role="alert">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-heading">Connect With Me</h2>
            <p className="contact-text">
              Feel free to reach out through any of these platforms. 
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="quick-info">
              <div className="info-item">
                <h3 className="info-title">Location</h3>
                <p className="info-text">San Francisco, CA</p>
              </div>
              <div className="info-item">
                <h3 className="info-title">Availability</h3>
                <p className="info-text">Open to opportunities</p>
              </div>
              <div className="info-item">
                <h3 className="info-title">Response Time</h3>
                <p className="info-text">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
