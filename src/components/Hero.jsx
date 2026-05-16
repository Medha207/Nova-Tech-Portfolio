import React from 'react';

const Hero = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cover" className="hero-section reveal active">
      <div className="hero-layout">
        <div className="hero-text-content">
          <p className="cyan-text highlight-caps">STUDENT INNOVATORS FROM NIAT</p>
          <h1 className="hero-title-main">NovaTech <span className="blue-text">Solutions</span></h1>
          <h2 className="hero-subtext" style={{ color: 'var(--light-slate)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            Building Smart Digital Solutions for Real Businesses
          </h2>
          <p className="hero-description" style={{ color: 'var(--slate)' }}>
            We build modern web applications, AI solutions, and management systems that help businesses streamline operations, increase efficiency, and grow digitally.
          </p>
          <div className="hero-features-grid">
            <div className="hero-feature"><i className="fas fa-code"></i><span>Web Development</span></div>
            <div className="hero-feature"><i className="fas fa-microchip"></i><span>AI Solutions</span></div>
            <div className="hero-feature"><i className="fas fa-database"></i><span>Management Systems</span></div>
            <div className="hero-feature"><i className="fas fa-cog"></i><span>Automation</span></div>
          </div>
          <button onClick={(e) => handleScroll(e, '#services')} className="btn-primary">
            Explore Our Services <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-image-side">
          <div className="hero-img-wrapper">
            {/* Make sure the hero image is in the public directory or imported if local */}
            <img src="/hero-image.jpg" alt="Innovation Hub" />
            <div className="hero-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
