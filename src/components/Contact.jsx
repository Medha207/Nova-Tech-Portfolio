import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: '', message: '' });

    // Simulate API Request
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1; // 90% success rate for simulation

      setIsSubmitting(false);

      if (isSuccess) {
        setFeedback({
          type: 'success',
          message: 'Success! Your message has been sent. We will contact you shortly.'
        });
        e.target.reset();
      } else {
        setFeedback({
          type: 'error',
          message: 'Oops! Something went wrong. Please try again later.'
        });
      }

      // Auto-hide feedback
      setTimeout(() => {
        setFeedback({ type: '', message: '' });
      }, 6000);
    }, 2000);
  };

  return (
    <section id="contact" className="reveal">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title-highlight">Contact Us</h2>
      </div>
      
      <div className="contact-real-grid">
        {/* Column 1: Info */}
        <div className="contact-side-info">
          <h2 className="contact-cta">Let's Build <br /><span className="blue-text">Together</span></h2>
          <p className="contact-desc">Reach out to us and let's create something great! We're ready to bring your vision to life.</p>
          
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=punithdata@gmail.com" target="_blank" rel="noreferrer" className="contact-item-box glass-card">
            <div className="item-icon"><i className="fas fa-envelope"></i></div>
            <div className="item-text">
              <strong>Email</strong>
              <span>punithdata@gmail.com</span>
            </div>
            <i className="fas fa-external-link-alt click-icon"></i>
          </a>
          
          <a href="https://wa.me/919676318048" target="_blank" rel="noreferrer" className="contact-item-box glass-card">
            <div className="item-icon"><i className="fas fa-phone"></i></div>
            <div className="item-text">
              <strong>Phone</strong>
              <span>+91 9676318048</span>
            </div>
            <i className="fas fa-external-link-alt click-icon"></i>
          </a>
        </div>

        {/* Column 2: Form */}
        <div className="contact-form-main glass-card">
          <h3>Send a Message</h3>
          <form id="premium-contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" placeholder="Tell us about your project requirements..." rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-send" disabled={isSubmitting}>
              <span className="btn-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <i className={isSubmitting ? 'fas fa-spinner fa-spin btn-icon' : 'fas fa-paper-plane btn-icon'}></i>
            </button>
          </form>
          {feedback.message && (
            <div className={`form-feedback ${feedback.type}`} style={{ display: 'block' }}>
              {feedback.message}
            </div>
          )}
        </div>

        {/* Column 3: Socials */}
        <div className="contact-socials-side glass-card">
          <h3 style={{ color: 'var(--white)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Connect</h3>
          <div className="social-list">
            <a href="https://github.com/novatech-solutions" target="_blank" rel="noreferrer" className="social-card-item">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/punith-reddy-gangireddy" target="_blank" rel="noreferrer" className="social-card-item">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="reply-card">
            <i className="far fa-clock"></i>
            <p style={{ margin: 0 }}>We typically reply within 24 hours.</p>
          </div>
        </div>
      </div>
      <p className="final-footer">NovaTech Solutions | NIAT Students Initiative | &copy; 2024</p>
    </section>
  );
};

export default Contact;
