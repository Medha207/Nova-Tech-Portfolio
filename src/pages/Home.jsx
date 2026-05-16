import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    // Reveal sections on scroll
    const observerOptions = {
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => {
      revealObserver.observe(section);
    });

    // Active link highlighting on scroll
    const navObserverOptions = {
      threshold: 0.5
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}` || link.getAttribute('href') === `/#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, navObserverOptions);

    document.querySelectorAll('section').forEach(section => {
      navObserver.observe(section);
    });

    // Suble parallax effect
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-card, .hero-img-wrapper');
      const x = (window.innerWidth / 2 - e.pageX) / 80;
      const y = (window.innerHeight / 2 - e.pageY) / 80;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="brochure-container bg-[#010409]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
