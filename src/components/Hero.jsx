import React from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas.jsx';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleCanvas />
      <div className="container hero-split-container">
        
        {/* Left Column: Hero Text Content */}
        <motion.div 
          className="hero-text-side"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="trust-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            AI-Powered Automation Systems
          </motion.div>
          
          <motion.h1 
            className="text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your business operations,<br />
            <span className="orange-gradient">finally automated.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            You shouldn’t need spreadsheets, follow-up calls, scattered WhatsApp messages, and manual updates just to run a business. We build AI-powered workflows and custom automations that capture leads, manage operations, update systems, and keep your business moving — automatically.
          </motion.p>
          
          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#contact" className="btn btn-primary">
              Book a Strategy Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#solutions" className="btn btn-secondary">See Live Automations</a>
          </motion.div>
          
          <motion.div 
            className="hero-supporting-checklist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="checklist-item">
              <span className="check-bullet">✓</span> Custom Built
            </span>
            <span className="checklist-item">
              <span className="check-bullet">✓</span> Results Driven
            </span>
            <span className="checklist-item">
              <span className="check-bullet">✓</span> Secure & Reliable
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column: High-Tech Desk Mockup Showcase */}
        <motion.div 
          className="hero-visual-side"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-visual-wrapper">
            <img 
              src="/assets/hero_desk.png" 
              alt="AutomateLabs Workspace Mockup" 
              className="hero-mockup-image"
            />
            <div className="hero-mockup-overlay"></div>
            
            {/* Overlaid Floating Panels from the Screenshot */}
            <motion.div 
              className="overlaid-panel panel-1"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <div className="panel-icon-success">✓</div>
              <div className="panel-text">
                <span className="panel-title">Invoice Sent</span>
                <span className="panel-val">$2,550</span>
              </div>
            </motion.div>

            <motion.div 
              className="overlaid-panel panel-2"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <div className="panel-icon-alert">⚡</div>
              <div className="panel-text">
                <span className="panel-title">Lead Qualified</span>
                <span className="panel-val">New lead from Website</span>
              </div>
            </motion.div>

            <motion.div 
              className="overlaid-panel panel-3"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -2 }}
            >
              <div className="panel-icon-info">✓</div>
              <div className="panel-text">
                <span className="panel-title">Follow-up Done</span>
                <span className="panel-val">Email sequence executed</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Mouse Indicator */}
      <motion.div
        className="scroll-mouse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="sm-box">
          <div className="sm-wheel" />
        </div>
        <span className="sm-label">Scroll</span>
      </motion.div>
    </section>
  );
}
