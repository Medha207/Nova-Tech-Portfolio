import React from 'react';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-layer-group logo-icon" style={{ color: 'var(--blue-bright)', fontSize: '2rem' }}></i>
          <span className="logo-text">NovaTech <span className="solutions">SOLUTIONS</span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#cover" onClick={(e) => handleScroll(e, '#cover')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About Us</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, '#services')}>Services</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Our Work</a></li>
          <li><a href="#tech-stack" onClick={(e) => handleScroll(e, '#tech-stack')}>Tech Stack</a></li>
          <li><a href="#team" onClick={(e) => handleScroll(e, '#team')}>Team</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
