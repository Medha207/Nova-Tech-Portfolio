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
        <div className="logo cursor-pointer" onClick={(e) => handleLinkClick(e, '#cover')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.4)] transition-transform duration-300 hover:scale-105">
            <i className="fa-solid fa-user-ninja text-xl text-cyan-400"></i>
          </div>
          <span className="logo-text text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-1.5 font-['Outfit']">
            <span className="text-white font-extrabold">Digital</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.4)] font-black uppercase tracking-wider">
              Ninjas
            </span>
          </span>
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
