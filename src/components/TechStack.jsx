import React from 'react';

const TechStack = () => {
  return (
    <section id="tech-stack" className="reveal">
      <div className="section-header">
        <span className="section-subtitle">Our Tools</span>
        <h2 className="section-title-highlight">Tech Stack</h2>
      </div>
      <div className="tech-grid-premium">
        <div className="glass-card tech-card-premium">
          <i className="fab fa-react" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>React.js</h4>
        </div>
        <div className="glass-card tech-card-premium">
          <i className="fab fa-node-js" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>Node.js</h4>
        </div>
        <div className="glass-card tech-card-premium">
          <i className="fas fa-database" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>MongoDB</h4>
        </div>
        <div className="glass-card tech-card-premium">
          <i className="fab fa-js" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>JavaScript</h4>
        </div>
        <div className="glass-card tech-card-premium">
          <i className="fab fa-figma" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>Figma</h4>
        </div>
        <div className="glass-card tech-card-premium">
          <i className="fab fa-github" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>GitHub</h4>
        </div>
        <div className="glass-card tech-card-premium">
          <i className="fas fa-server" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>Express</h4>
        </div>
        <div className="glass-card tech-card-premium">
          <i className="fab fa-python" style={{ fontSize: '3rem', color: 'var(--cyan)', marginBottom: '1rem' }}></i>
          <h4 style={{ color: 'var(--white)', fontSize: '1.2rem' }}>Python</h4>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
