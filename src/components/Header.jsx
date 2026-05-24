import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-header" 
      style={{ 
        background: isScrolled ? 'rgba(5, 5, 7, 0.8)' : 'rgba(5, 5, 7, 0.6)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="container">
        <a href="#" id="logo-brand" style={{ textDecoration: 'none' }}>
          <Logo size={32} />
        </a>
        
        <nav id="nav-menu" className={isOpen ? 'open' : ''}>
          <a href="#problem" onClick={() => setIsOpen(false)}>The Problem</a>
          <a href="#solutions" onClick={() => setIsOpen(false)}>What We Build</a>
          <a href="#calculator" onClick={() => setIsOpen(false)}>Lead Speed Calc</a>
          <a href="#industries" onClick={() => setIsOpen(false)}>Industries</a>
          <a href="#process" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#why-us" onClick={() => setIsOpen(false)}>Why Us</a>
        </nav>
        
        <div className="nav-cta">
          <a href="#contact" className="btn btn-secondary">See Use Cases</a>
          <a href="#contact" className="btn btn-primary">Book a Call</a>
        </div>
        
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          id="nav-toggle" 
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
