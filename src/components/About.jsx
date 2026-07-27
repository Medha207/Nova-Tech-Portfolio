import React from 'react';

const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="section-header">
        <span className="section-subtitle">Who We Are</span>
        <h2 className="section-title-highlight">About Us</h2>
      </div>
      <div className="about-main-content">
        <div className="about-text-left">
          <h2 className="about-title">Building Solutions. <br /><span className="blue-text">Creating Impact.</span></h2>
          <p className="about-desc">We are a team of passionate student developers from NIAT focused on solving real-world business problems using modern technology.</p>
          <div className="about-mission-box">
            <i className="fas fa-bullseye mission-icon"></i>
            <p>Our mission is to help startups, cafes, hostels, local businesses, and organizations digitize their operations through scalable and affordable software solutions.</p>
          </div>
        </div>
        <div className="about-stats-right">
          <div className="innovators-card glass-card">
            <div className="stat-main"><i className="fas fa-users"></i><span className="stat-num">5</span></div>
            <div className="stat-info" style={{ display: 'flex', flexDirection: 'column' }}>
              <strong>Passionate Innovators</strong>
              <span>One Goal: Real Impact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="specialize-section">
        <div className="specialize-divider"><span className="specialize-label">WE SPECIALIZE IN</span></div>
        <div className="specialize-grid">
          <div className="spec-item"><i className="fas fa-laptop-code"></i><span>Web Apps</span></div>
          <div className="spec-item"><i className="fas fa-cubes"></i><span>Management</span></div>
          <div className="spec-item"><i className="fas fa-brain"></i><span>AI Systems</span></div>
          <div className="spec-item"><i className="fas fa-gears"></i><span>Automation</span></div>
          <div className="spec-item"><i className="fas fa-palette"></i><span>UI/UX Design</span></div>
          <div className="spec-item"><i className="fas fa-cloud-arrow-up"></i><span>Cloud</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;
