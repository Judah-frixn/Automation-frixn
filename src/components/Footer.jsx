import React from 'react';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" id="logo-brand-footer" style={{ textDecoration: 'none' }}>
              <Logo size={28} />
            </a>
            <p>We build custom AI agents, automated workflows, and CRM integrations to eliminate repetitive operations and scale your operations without increasing overhead.</p>
          </div>
          
          <div>
            <div className="footer-title">Solutions</div>
            <ul className="footer-links">
              <li><a href="#solutions">Lead Ingestion</a></li>
              <li><a href="#solutions">Intelligent Response</a></li>
              <li><a href="#solutions">Direct Communication</a></li>
              <li><a href="#solutions">Database Syncing</a></li>
              <li><a href="#solutions">Operational Routing</a></li>
            </ul>
          </div>
          
          <div>
            <div className="footer-title">Company</div>
            <ul className="footer-links">
              <li><a href="#problem">The Problem</a></li>
              <li><a href="#solutions">What We Build</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#why-us">Why Us</a></li>
            </ul>
          </div>
          
          <div>
            <div className="footer-title">Resources</div>
            <ul className="footer-links">
              <li><a href="#contact">Case Studies</a></li>
              <li><a href="#contact">Documentation</a></li>
              <li><a href="#contact">API Status</a></li>
              <li><a href="#contact">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} AutomateLabs. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
