import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Use IntersectionObserver to track visible sections reliably
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px" // Trigger when section crosses the absolute center of the viewport
      }
    );

    const sectionElements = links.map(link => document.querySelector(link.href)).filter(Boolean);
    sectionElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#home" className="nav-logo gradient-text" id="nav-logo" onClick={() => handleNav('#home')}>
          Shruti
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                id={`nav-${label.toLowerCase()}`}
                className={`nav-link ${active === href ? 'active' : ''}`}
                onClick={() => handleNav(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          id="hamburger-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
