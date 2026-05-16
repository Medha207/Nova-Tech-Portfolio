import React from 'react';

const Services = () => {
  return (
    <section id="services" className="reveal">
      <div className="section-header">
        <span className="section-subtitle">What We Do</span>
        <h2 className="section-title-highlight">Our Services</h2>
      </div>
      <div className="services-grid-premium">
        <div className="glass-card service-card-premium">
          <i className="fas fa-globe"></i>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem' }}>Website Development</h3>
          <p>Business websites, portfolios, and e-commerce.</p>
        </div>
        <div className="glass-card service-card-premium">
          <i className="fas fa-building-user"></i>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem' }}>Management Systems</h3>
          <p>Hostel, inventory, and attendance platforms.</p>
        </div>
        <div className="glass-card service-card-premium">
          <i className="fas fa-robot"></i>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem' }}>AI Solutions</h3>
          <p>Chatbots and recommendation engines.</p>
        </div>
        <div className="glass-card service-card-premium">
          <i className="fas fa-mobile-screen-button"></i>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem' }}>Mobile Apps</h3>
          <p>Responsive, mobile-first applications.</p>
        </div>
        <div className="glass-card service-card-premium">
          <i className="fas fa-cloud-bolt"></i>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem' }}>Cloud Integration</h3>
          <p>Scalable backend architectures.</p>
        </div>
        <div className="glass-card service-card-premium">
          <i className="fas fa-pen-nib"></i>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem' }}>UI/UX Design</h3>
          <p>Modern, intuitive interfaces.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
