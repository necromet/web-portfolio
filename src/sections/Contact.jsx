import { useForm } from '@formspree/react';
import './Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("FORM_ID_PLACEHOLDER");

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/necromet', icon: '📁' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/edward-renaldi', icon: '💼' },
    { name: 'Email', url: 'mailto:edwardrenaldi219@gmail.com', icon: '✉️' },
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

            {state.succeeded ? (
              <div className="form-message success" role="alert">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    required
                    className="form-textarea"
                    rows="6"
                    placeholder="Tell me about your project..."
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>

                {state.errors && (
                  <div className="form-message error" role="alert">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            )}
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
                <p className="info-text">Indonesia</p>
              </div>
              <div className="info-item">
                <h3 className="info-title">Business Inquiries</h3>
                <p className="info-text">
                  <a href="mailto:eraicode@gmail.com" className="info-email-link">eraicode@gmail.com</a>
                </p>
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
