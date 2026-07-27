import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: '', message: '' });

    const form = e.target;
    const formData = new FormData(form);
    const formObject = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      _subject: 'New Contact Inquiry — Digital Ninjas',
      _captcha: 'false'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/punithdata@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (data.success === 'true' || data.success === true) {
        setFeedback({
          type: 'success',
          message: 'Success! Your message has been sent directly to punithdata@gmail.com. We will contact you shortly.'
        });
        form.reset();
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setFeedback({
          type: 'info',
          message: 'Form Activation Email Sent! FormSubmit sent an activation link to punithdata@gmail.com. Please click "Activate Form" in your email inbox to complete setup.'
        });
        form.reset();
      } else {
        setFeedback({
          type: 'error',
          message: data.message || 'Oops! Something went wrong while sending your message. Please try again or email us directly.'
        });
      }
    } catch (err) {
      setIsSubmitting(false);
      setFeedback({
        type: 'error',
        message: 'Network error. Please try again later or email us directly at punithdata@gmail.com.'
      });
    }

    // Auto-hide feedback
    setTimeout(() => {
      setFeedback({ type: '', message: '' });
    }, 7000);
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
      <p className="final-footer">Digital Ninjas | NIAT Students Initiative | &copy; 2024</p>
    </section>
  );
};

export default Contact;
