import React from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, targetId) => {
    handleScroll(e, targetId);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-layer-group logo-icon" style={{ color: 'var(--blue-bright)', fontSize: '2rem' }}></i>
          <span className="logo-text">NovaTech <span className="solutions">SOLUTIONS</span></span>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#cover" onClick={(e) => handleLinkClick(e, '#cover')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Us</a></li>
          <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Our Work</a></li>
          <li><a href="#tech-stack" onClick={(e) => handleLinkClick(e, '#tech-stack')}>Tech Stack</a></li>
          <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Team</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
