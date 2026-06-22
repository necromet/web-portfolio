import { useForm } from '@formspree/react';
import './Contact.css';

const FlipWord = ({ children, className = '' }) => {
  return (
    <span className={`flip-word ${className}`}>
      <div className="flip-link-row">
        {children.split('').map((letter, i) => (
          <span
            key={i}
            className="flip-link-letter"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="flip-link-overlay">
        {children.split('').map((letter, i) => (
          <span
            key={i}
            className="flip-link-letter"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </span>
  );
};

const FlipLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className="flip-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flip-link-row">
        {children.split('').map((letter, i) => (
          <span
            key={i}
            className="flip-link-letter"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="flip-link-overlay">
        {children.split('').map((letter, i) => (
          <span
            key={i}
            className="flip-link-letter"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};

function Contact() {
  const [state, handleSubmit] = useForm("FORM_ID_PLACEHOLDER");

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/necromet' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/edward-renaldi' },
    { name: 'Email', url: 'mailto:edwardrenaldi219@gmail.com' },
  ];

  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="contact-hero">
          <h1
            className="contact-hero-title contact-hero-clickable"
            onClick={() => document.getElementById('connect-links')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FlipWord>LET&apos;S</FlipWord>{" "}
            <FlipWord className="contact-highlight">CONNECT</FlipWord>
          </h1>
          <p className="contact-hero-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card glass-card">
            <div className="card-glow" />
            <h2 className="card-title">Send a Message</h2>

            {state.succeeded ? (
              <div className="form-success" role="alert">
                <span className="success-icon">✓</span>
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    aria-required="true"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    aria-required="true"
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={state.submitting}>
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>

                {state.errors && (
                  <div className="form-error" role="alert">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            )}
          </div>

          <div className="contact-side">
            <div className="glass-card detail-card">
              <div className="card-glow" />
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Indonesia</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Availability</span>
                  <span className="detail-value detail-available">
                    <span className="pulse-dot" /> Open to opportunities
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Business</span>
                  <a href="mailto:eraicode@gmail.com" className="detail-link">eraicode@gmail.com</a>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Response</span>
                  <span className="detail-value">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-links-section" id="connect-links">
          <h2 className="flip-links-title">Connect</h2>
          <div className="flip-links-grid">
            {socialLinks.map((link) => (
              <FlipLink key={link.name} href={link.url}>
                {link.name}
              </FlipLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
